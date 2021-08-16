const rButton = document.querySelector('button[name=rButton]');
const rColor = document.querySelectorAll('.rColor');

rButton.addEventListener('click', 
    function(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

        for(let i = 0;i < rColor.length;i++){
            rColor[i].style.color = 'rgb('+ r +','+ g +','+ b +')';
        }

    }
);

const rValue = document.querySelector('.r-value');
const rSlider = document.querySelector('input[name=red-slide]');


const gValue = document.querySelector('.g-value');
const gSlider = document.querySelector('input[name=green-slide]');


const bValue = document.querySelector('.b-value');
const bSlider = document.querySelector('input[name=blue-slide]');


rSlider.addEventListener('input',
    function(){
        const rsVal = rSlider.value;
        const gsVal = gSlider.value;
        const bsVal = bSlider.value;

        rValue.innerHTML = rSlider.value;

        document.body.style.backgroundColor = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';

        for(let i = 0;i < rColor.length;i++){
            rColor[i].style.color = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';
        }
    }
    
);

gSlider.addEventListener('input',
    function(){
        const rsVal = rSlider.value;
        const gsVal = gSlider.value;
        const bsVal = bSlider.value;

        gValue.innerHTML = gSlider.value;

        document.body.style.backgroundColor = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';

        for(let i = 0;i < rColor.length;i++){
            rColor[i].style.color = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';
        }
    }
    
);

bSlider.addEventListener('input',
    function(){
        const rsVal = rSlider.value;
        const gsVal = gSlider.value;
        const bsVal = bSlider.value;
        
        bValue.innerHTML = bSlider.value;
        
        document.body.style.backgroundColor = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';

        for(let i = 0;i < rColor.length;i++){
            rColor[i].style.color = 'rgb('+ rsVal +','+ gsVal +','+ bsVal +')';
        }
    }
    
);