function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rCfuRjrUF/model.json", modelready)
    }
    
    function modelready(){
    classifier.classify(gotResults);
    }

    function gotResults(error, results) {

        if(error)
        {
            console.error(error);
        }
        else{
    
            console.log(results);
            r= Math.floor(Math.random()* 255) + 1
            g= Math.floor(Math.random()* 255) + 1
            b= Math.floor(Math.random()* 255) + 1
    
            document.getElementById("result_label").innerHTML = " I can Hear - " + results[0].label;
            document.getElementById("result_acc").innerHTML = " Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
            document.getElementById("result_label").style.color = " rgb( " + r +"," + g +"," + b +")";
            document.getElementById("result_acc").style.color = " rgb( " + r +"," + g +"," + b +")";
    
            img = document.getElementById("ear");
    
            if ( results[0].label == "cat") {
    
                img.src = "https://clipart.info/images/ccovers/1522855947cartoon-cat-png-clip-art.png";

            } else if ( results[0].label == "dog") {
    
                img.src = "dog.png";
                
            } else if ( results[0].label == "lion") {
    
                img.src = "lion.png";
                
            }else 
                img.src = "img";
                
            }
    
    
    
    
        }
    