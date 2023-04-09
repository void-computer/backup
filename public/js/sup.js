function sup() {
    const para = document.createElement("p");
            const node = document.createTextNode("S U P R I S E !");
            para.appendChild(node);
            
            const element = document.getElementById("div1");
            const child = document.getElementById("p1");
            element.insertBefore(para,child);
}
