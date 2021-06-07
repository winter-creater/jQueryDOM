// window.jQuery=function(selector){
    // 过程，对象里的函数，this是对象名。函数返回值返回对象，链式操作
//    const elements=document.querySelectorAll(selector)//数组
// //    api对象可以操作elements
//    const api={
// //    闭包，函数访问外部变量。addClass()访问elements
//        addClass(className){
//            for(let i=0;i<elements.length;i++){
//                elements[i].classList.add(className)
//            }
//            return this //this是api
//        }
//    }
//    return api
// }


window.jQuery=function(selectorOrArray){
    let elements
    // const 声明变量必须赋值
    if(typeof selectorOrArray==='string'){
       elements=document.querySelectorAll(selectorOrArray)//数组
        //    api对象可以操作elements
    }else if(selectorOrArray instanceof Array){
        elements=selectorOrArray
    }

   return{
       oldApi:selectorOrArray.oldApi,
 //    闭包，函数访问外部变量。addClass()访问elements
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this //this是api
        },
        find(selector){
            let array=[]
            for(let i=0;i<elements.length;i++){
                const elements2=Array.from(elements[i].querySelectorAll(selector))
                array=array.concat(elements2)
                // elements[i].querySelectorAll(selector)伪数组，Array.from()转化为真数组
            }
        //    const newApi=jQuery(array)
        //    return newApi
        array.oldApi=this//this就是api  旧api
        return jQuery(array)
        },
        each(fn){
            for(let i=0;i<elements.length;i++){
               fn.call(null, elements[i],i)
            }
            return this
        },
        parent(){
            const array=[]
            this.each((node)=>{
                if(array.indexOf(node.parentNode)===-1){
                    array.push(node.parentNode)
                }else{
                }
            })
            return jQuery(array)
        },
        children(){
            const array=[]
            this.each((node)=>{
                array.push(...node.children)//展开操作符，相当于 array.push(node.children[0],node.children[1],node.children[2]...)
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        end(){
            return this.oldApi//this 是当前的api (api2) 新的api
        }
    }
 }