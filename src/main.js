jQuery('.test')
.addClass('red')
.addClass('blue') 

const x1=jQuery('.test1')
const x2=x1.find('.child').addClass('red')
x1.addClass('green')

// .end()
// .addClass()

const x=jQuery('.test4')
//  .find('.child')

x.each((y)=>{console.log(y)})
x.parent().print()
x.children().print()

