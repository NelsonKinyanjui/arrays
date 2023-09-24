/* const fruits = ['mango','apple','banana','passion'];
 let fLen = fruits.length
 let text = '<ul>';
 for (i = 0; i < fLen; i++){
    text += '<li>' + fruits[i] +'</li>';

 } text += '</ul>';
    console.log();

    for (i = 0; i <= 100; i++){
      console.log('My Name is Collins');

    }*/

    function mCat(cat){
      return cat.startsWith('m');
    }
     const cat = ['monkey','monster','merlin','lion','beast'];

     const filtered = cat.filter(mCat);
     console.log(filtered);
 