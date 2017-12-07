function nyahsulit(flag, key, input) {
    keluar = '';
    for(i = 0; i < flag.length; i++) {
        temp = String.fromCharCode(flag[i].charCodeAt(0)^key.charCodeAt(0));
        key = String.fromCharCode(i^input[i].charCodeAt(0));
        keluar += temp;
    }
    return(keluar);
}