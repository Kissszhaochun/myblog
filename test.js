var str='Hello <%= name %=>';

var o={name:Alice};

function tmp1(str,obj){
  str='var p=[];'+
      'with(obj){p.push('+parser(str)')}'+
      'return p;'
  var r=(new Function('obj',str))(obj)
  return r.join('');
}

tmp1(str,0);
//'Hello Alice !'
