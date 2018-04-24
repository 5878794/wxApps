let getParam = Symbol(),
    getSetParam = Symbol();

class jq{
    constructor(id,obj){
        this.id = id;
        this.obj = obj;

        return this;
    }

    [getParam](type){
        let oldData = this.obj.data.__jq || {};
        oldData = oldData[this.id] || {};
        oldData = oldData[type] || ''; 
        return oldData;
    }

    [getSetParam](){
        let oldData = this.obj.data.__jq || {};
        if(!oldData[this.id]){
            oldData[this.id] = {};
        }
        return oldData;
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

        let setData = this[getSetParam]();
        setData[this.id].class = className;

        this.obj.setData({__jq:setData});

        return this;
    }

    //删除class
    //不能删除在html中已设置的class
    removeClass(text){
        let className = this[getParam]('class'),
            classArray = className.split('');

        let newClass = [];
        classArray.map(rs=>{
            if(rs!=text){
                newClass.push(rs);
            }
        })
        newClass = newClass.join(' ');

        let setData = this[getSetParam]();
        setData[this.id].class = newClass;

        this.obj.setData({ __jq: setData });

        return this;
    }

    //设置css
    css(obj){

    }

}

//obj指到传入page的对象，一般this
module.exports = function(obj,id){
    return new jq(id,obj);
};