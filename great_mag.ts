
let magic: string[] = ['ali', 'qadeer', 'khan', 'kamran', 'zia'];

function make_great(magicarray: string[]){

for(let i=0; i<magicarray.length; i++){

   magic[i]='the great ' + magicarray[i]
}
}

function magic_name(magicians:string []){

    magicians.forEach(element => {
            console.log(element);
        });
    }
    make_great(magic);
    magic_name(magic);