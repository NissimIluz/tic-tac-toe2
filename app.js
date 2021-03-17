let size=3;
var turn=0;

function start() {

    var string="<table > <tbody>"
        const c=' '
        for(var i=0;i<size;i++){
            string+="<tr>"
            for(let j=0;j<size;j++){
                let id=i+"-"+j

               var button=' <button  id=\''+id+'\' class="block" onclick  ="exchange(\''+id+'\')"><b>'+c+'</b></button>'
               string+="<td >"+button+"</td>"
            }
            string+="</tr>"
          }
    return (string +"</tbody> </table>")
        }
function exchange(id){
        document.getElementById(id).onclick=""
        document.getElementById(id).style.padding="21px 22px";
        if(turn==1)
          {
            document.getElementById(id).innerHTML="<b>O</b>"
            turn=0;
          }
        else
    {
      document.getElementById(id).innerHTML="<b>X</b>"
      turn=1
    }
}
function resize (){
    size = document.getElementById("mySelect").value;
    document.getElementById("main").innerHTML = start();

}
