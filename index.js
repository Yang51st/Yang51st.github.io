const name_h1=document.querySelector('.Name');
const yang=[' ','Y','a','n','g',' ','L','i'];
let ind=0;
let state='forw';
const timer=setInterval(function()
{
    if(state==='forw')
    {
        name_h1.innerHTML+=yang[ind]
        ind+=1;
    }
    else
    {
        name_h1.innerHTML=name_h1.innerHTML.substring(-1,ind);
        ind--;
    }
    if(ind===yang.length)
    {
        state='back';
    }
    if(ind==0)
    {
        state='forw'
    }
},750);