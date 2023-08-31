function btnChange(){
    if (document.getElementById('square').style.backgroundColor=='rgb(227, 129, 111)')
    {
        document.getElementById('square').style.backgroundColor='#EDC86B';
        document.getElementById('squareText').textContent='^ Dis yellow square';
    }
    else
    {
        document.getElementById('square').style.backgroundColor='#E3816F';
        document.getElementById('squareText').textContent='^ Dis pink square';
    }
}

