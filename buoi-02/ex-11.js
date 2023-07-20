var arrayJob = [
    {job:'Sleeping', duration:5},
    {job:'Working', duration:3},
    {job:'Playing', duration:6},
    {job:'Reading', duration:2},
    {job:'Muzik', duration:2}
]


// Sleeping 0
// Sleeping 1
// Sleeping 2
// Sleeping 3
// Sleeping 4
// Working 0
// Working 1
// Working 2
// ...
// What a day!!

// Counting(arrayJob[1].duration,0,arrayJob[1].job)

function read(id ,action){
            console.log(id +' - '+action);
}
var Counting = function(array, id=0, dara=1){
    return new Promise((resolve,reject)=>{
        var job = array[id]
        setTimeout(()=>{
            if(dara <= job.duration){
                read(dara, job.job)
                resolve(Counting(array,id, dara+1));
            }else if(array.length !== id+1){
                resolve(Counting(array,id+1, 1));
                
            }else{
                reject();
            }
        },1000)
    }
    )
}

Counting(arrayJob).catch(()=>{
        console.log("What a day! " );
})




// function creaPromise(a, arrayJob){
//     if(a<arrayJob.length){
//         thutu(a,arrayJob.length).then((data)=>{
//             Counting(arrayJob[data].duration,0,arrayJob[data].job);
//        })
//        .catch((error)=>{
//            console.log(error)
//        })
//        a=a+1;
//        creaPromise(a,arrayJob)
//     } else{
//         console.log("What a day!!")
//     }
    

// }

// creaPromise(0,arrayJob);

// function duyet(a,arrb){
//     thutu(a,arrb.length).then((data)=>{
//         if(data<arrb.length){
//             Counting(arrb[data].duration,0,arrb[data].job);
//             data++;
//             duyet(data,arrb)
//         }
//     }).catch(()=>{
//         console.log('What a day!!')
//     })
// }

//     duyet(0,arrayJob)
 
// for(var p of arrayJob){
//     Counting(p.duration,0,p.job);
// }
// var i = 0;
// while (i < arrayJob.length){
//     thutu(0,arrayJob.length).then((data)=>{
//         Counting(arrayJob[data].duration,0,arrayJob[data].job);
//         return ++data;
//    })
//    .catch((error)=>{
//        console.log(error)
//    })
//     i++; // tăng i lên nếu không sẽ bị lặp vô hạn
// }





// var i=0;
// if(i<arrayJob.length){
//     
//     i++;
// }else{

// }



// var i=0;
// if (i<arrayJob.length){
//     Counting(arrayJob[i].duration,0,arrayJob[i].job);
//     i++;
// }else{
//     console.log('What a day!!')
// }