let getParam = Symbol(),
    setParam = Symbol();

class jq{
    constructor(id,obj){
        this.id = id;
        this.obj = obj;

        return this;
    }

    //获取参数
    [getParam](type){
        let oldData = this.obj.data.__jq || {};
        oldData = oldData[this.id] || {};
        oldData = oldData[type] || ''; 

        if(type == 'data' && !oldData){
            oldData = {};
        }
        return oldData;
    }

    //设置参数
    [setParam](type,val){
        let oldData = this.obj.data.__jq || {};
        if(!oldData[this.id]){
            oldData[this.id] = {};
        }

        oldData[this.id][type] = val;
        console.log(oldData)
        this.obj.setData({ __jq:oldData});
    }

    //添加class
    addClass(text){
        let className = this[getParam]('class'),
            classArray = className.split('');

        if (classArray.indexOf(text)==-1){
            className += ' '+text;
        }else{
            return this;
        }

        this[setParam]('class',className);

        return this;
    }

    //删除class
    //不能删除在html中已设置的class
    removeClass(text){
        let className = this[getParam]('class'),
            classArray = className.split(' ');

        let newClass = [];
        classArray.map(rs=>{
            if(rs!=text){
                newClass.push(rs);
            }
        })
        newClass = newClass.join(' ');


        this[setParam]('class', newClass);

        return this;
    }

    //设置css
    css(obj){
        //获取原来设置的值
        let style = this[getParam]('style'),
            styles = style.split(';');

        //转对象
        let styleObj = {};
        styles.map(rs=>{
            if(rs.indexOf(':')>-1){
                rs = rs.split(':');
                let key = rs[0].replace(/\s/ig, ''),
                    val = rs[1];
                styleObj[key] = val;
            }
        })

        
        if(typeof obj == 'string'){
            //判断是否是获取设置的css
            console.log('TODO 从系统获取');
            return '';
        }


        //合并现在设置的值
        let newObj = Object.assign(styleObj,obj);  

        //转字符串
        let str ='';
        for (let [key, value] of Object.entries(newObj)){
            str += key+':'+value+';'
        }

        //写入
        this[setParam]('style', str);

        return this;
    }

    //设置data
    data(obj){
        //获取参数
        let data = this[getParam]('data');

        if(typeof obj == 'string'){
            //获取设置的data的key的值
            return data[obj];
        }else{
            //写入新设置的data对象
            let newData = Object.assign(data, obj);

            this[setParam]('data', newData);
        }
    }


    //动画 wx提供
    animate(obj, time = '1000', type = 'linear', callback){
        callback = callback || function(){};

        //创建wx动画对象
        var animation = wx.createAnimation({
            duration: time,
            timingFunction: type,
        });

        //处理obj
        let newObj = [];
        for (let [key, val] of Object.entries(obj)){
            if(key == 'transform'){
                let _val = val.split('(');
                key = _val[0];
                val = parseInt(_val[1]);
            }
 
            newObj.push({
                key:key,
                val:val
            });
        }

        //生成wx的动画方式
        for(let i =0,l=newObj.length;i<l;i++){
            let _obj = newObj[i],
                key = _obj.key,
                val = _obj.val;
            animation[key](val);
        }
        animation.step();

        this[setParam]('animation', animation.export());

        setTimeout(function(){
            callback();
        },time);

        return this;

    }

    //css动画
    cssAnimate(obj,time='1000',type='linear',callback){
        let animateObj = {
            '-webkit-transition': 'all ' + time+'ms '+type,
            'transition': 'all ' + time + 'ms ' + type,
            'transform-origin':'center center',
            '-webkit-transform-origin':'center center'
        }

        let newObj = Object.assign(obj,animateObj);

        this.css(newObj);
        return this;

    }
    
}

//obj指到传入page的对象，一般this
module.exports = function(obj,id){
    return new jq(id,obj);
};