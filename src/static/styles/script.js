const btn_imp=document.getElementById("btn_imp")
btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById('container').innerHTML;
    const win =window.open('','', 'height=700, width=700')
    win.document.write(conteudo)

    win.print()
})