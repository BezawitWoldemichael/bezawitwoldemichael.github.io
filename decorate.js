window.onload = function () {
    document.getElementById("biggerDecorations").onclick = myTimer;
    document.getElementById('malkovitch').onclick = changeWord;
    document.getElementById('pigLatin').onclick = pigLatin;
};


function pigLatin(){
    const text = document.getElementById('myTextArea').value;
    const words = text.split(' ');
    const vowels = ["a", "e", "i", "o", "u"];
  // using map
    const edited = words.map((word) => {
        const first = word[0].toLowerCase();
        if(vowels.includes(first)){
            return word + "ay";
        }
        else{
            let pos =1;
            for(let i = 1; i<word.length; i++){
                if(vowels.includes(word[i])){
                    break;
                }
                pos++;
            }
            const firstCluster = word.substring(0,pos);
            return word.slice(pos) + firstCluster + "ay";
        }
    })
    document.getElementById('myTextArea').value = edited.join(' ');
}

function changeWord(){
    const text = document.getElementById('myTextArea').value;
    const words = text.split(' ');
   function myTimer(){
    setInterval(biggerDec,500);
}

    function biggerDec() {
    var size = parseInt(window.getComputedStyle(document.getElementById("myTextArea")).fontSize);
    size += 4;
    document.getElementById("myTextArea").style.fontSize = size + "px";
}


function myFunction(){
    const isChecked = document.getElementById("myCheckbox").checked;
    if(isChecked){
        var myStyle =  document.getElementById("myTextArea").style;
        myStyle.fontWeight = "bold";
        myStyle.color = "green";
        myStyle.textDecoration = "underline"
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        
    }
    else{
        var myStyle =  document.getElementById("myTextArea").style;
        myStyle.fontWeight = "normal";
        myStyle.color = "black";
        myStyle.textDecoration = "none"
        document.body.style.backgroundImage= "none";
    }
}
  
