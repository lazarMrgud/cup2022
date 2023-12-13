

let btn_Start=document.querySelector(".start")
let btn_Group=document.querySelector(".Grupa")
let btn_I_round=document.querySelector(".Prvo_kolo")
let btn_II_round=document.querySelector(".Drugo_kolo")
let btn_III_round=document.querySelector(".Trece_kolo")

let btn_Sixth=document.querySelector(".VIII ")
let btn_Sixth_POINTS=document.querySelector(".VIII_bodovi")
let btn_IV_points=document.querySelector(".IV_bodovi")
let btn_II_points =document.querySelector(".II_bodovi")
let btn_FINALE_points=document.querySelector(".FINALE")
const naslovi = document.querySelectorAll('.naslov');
const DIV_title_for_finalists= document.querySelector('.name_of_cvalification');

const izabranaDugmad = [];
const izabranaDugmad_I = [];
const izabranaDugmad_II = [];
const izabranaDugma_III = [];


let Add_goals//ovde stoje golovi dodati za prvo kolo

const Round_I_goals=[]
const Round_II_goals=[]
const Round_III_goals=[]
const Goals_6_final=[]
const Goals_IV_final=[]
const Goals_II_final=[]
const Goals_third_place=[]
const Goals_final=[]
const sveobuhvatni_timovi=[]
const golovi=[] //ovde stoje golovi po poluvremenu
const noviTimovi=[]

const Round_I=[]
const Round_II=[]
const Round_III=[]
const ROUND_Sixth=[]
const ROUND_IV=[]

const ROUND_FINALE_II=[]
const ROUND_FINALE=[]
const TRECEMESTO=[]

const sorted_I_round=[]
const sorted_II_round=[]
const sorted_III_round=[]

const sorted_Sixth_final=[]
const sorted_IV_finale=[]
const sortirano_II_finale=[]
const sortirano_III_vs_FINAL=[]
const sortirano_finale=[]

const GRUPE_VIII=[]
const Group_IV=[]
const Group_II=[]


const GRUPA_TRECE_MESTO=[]
const GRUPA_FINALISATA=[]



const Timovi=[

    {id:0,grupa:"Agrupa",ime:"Katar",slika:"Image of tim/QAT.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:1,grupa:"Agrupa",ime:"Holandija",slika:"Image of tim/NED.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:2,grupa:"Agrupa",ime:"Ekvador",slika:"Image of tim/ECU.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:3,grupa:"Agrupa",ime:"Senegal",slika:"Image of tim/SEN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:4,grupa:"Bgrupa",ime: "Engleska",slika:"Image of tim/ENG.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:5,grupa:"Bgrupa",ime:"USA",slika:"Image of tim/USA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:6,grupa:"Bgrupa",ime: "Iran",slika:"Image of tim/IRN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:7,grupa:"Bgrupa",ime: "Korea",slika:"Image of tim/WAL.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:8,grupa:"Cgrupa",ime:"Argentina",slika:"Image of tim/ARG.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:9,grupa:"Cgrupa",ime:"Meksiko",slika:"Image of tim/MEX.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:10,grupa:"Cgrupa",ime: "Poljska",slika:"Image of tim/POL.png",bodov:"Image of tim/ball.png"},
    {id:11,grupa:"Cgrupa",ime:"Saud Arabi",slika:"Image of tim/KSA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:12,grupa:"Dgrupa",ime:"Frncuska",slika:"Image of tim/FRA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:13,grupa:"Dgrupa",ime:"Danaska",slika:"Image of tim/DEN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:14,grupa:"Dgrupa",ime:"Tunis",slika:"Image of tim/TUN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:15,grupa:"Dgrupa",ime:"Kontin-play",slika:"Image of tim/KSA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:16,grupa:"Egrupa",ime:"Spanija",slika:"Image of tim/ESP.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:17,grupa:"Egrupa",ime:"Nemacka", slika:"Image of tim/GER.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:18,grupa:"Egrupa",ime:"Japan",slika:"Image of tim/JPN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:19,grupa:"Egrupa",ime:"Costa Rica",slika:"Image of tim/CRC.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:20,grupa:"Fgrupa",ime:"Belgija", slika:"Image of tim/BEL.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:21,grupa:"Fgrupa",ime:"Hrvatska",slika:"Image of tim/CRO.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:22,grupa:"Fgrupa",ime:"Maroko",slika:"Image of tim/MAR.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:23,grupa:"Fgrupa",ime:"Kanada", slika:"Image of tim/CAN.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:24,grupa:"Ggrupa",ime:"Srbija",slika:"Image of tim/SRB.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:25,grupa:"Ggrupa",ime:"Brazil", slika:"Image of tim/BRA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:26,grupa:"Ggrupa",ime:"Kamerun", slika:"Image of tim/CMR.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:27,grupa:"Ggrupa",ime: "Švajcarska",slika:"Image of tim/SUI.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},

    {id:28,grupa:"Hgrupa",ime:"Portugal", slika:"Image of tim/POR.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:29,grupa:"Hgrupa",ime:"Urugvaj",slika:"Image of tim/URU.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:30,grupa:"Hgrupa",ime:"Koreja",slika:"Image of tim/WAL.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"},
    {id:31,grupa:"Hgrupa",ime:"Gana", slika:"Image of tim/GHA.png",bodovi:"Image of tim/ball.png",info:"podaci o timu i yemlji gde se nanaze"}


]



const groupedTeamsArray = grupisaniTimovi();


btn_Start.addEventListener("click", function(e){
    const adasd=document.querySelector(".container_all_of_Grup_za_trece")
    const value=e.currentTarget
    const value1 = e.currentTarget.className;
    btn_Start.classList.add("disable")
    btn_Group.classList.add("active")

    if(value){
        btn_Start.disabled=true
        btn_Group.disabled=false

    }

    All_tims(Timovi)
    let cards=document.querySelectorAll(".container_tim_grupe_F")
        function turn_the_picture(){
            this.classList.toggle("flip")
        }
        cards.forEach(card=>card.addEventListener("click", turn_the_picture))
});
btn_Group.addEventListener("click", function(e){

    

    btn_Group.classList.remove("active")
    btn_Group.classList.add("disable")

    btn_I_round.classList.add("active")

    const value = e.currentTarget
    if (value) {
        btn_Group.disabled = true
        grupisaniTimovi()
        Group_view(groupedTeamsArray)
        //const feild=field_selection()
        
        const button =document.querySelectorAll(".name_of_grup_button")
        click_on_Grup(button,groupedTeamsArray,izabranaDugmad)
    
    


    }
});
btn_I_round.addEventListener('click', function(e){
    btn_I_round.classList.remove("active")
    btn_I_round.classList.add("disable")
    btn_II_round.classList.add("active")
    
    //btn_I_round.classList.remove("output-group")

    const value=e.currentTarget
    if(value){
        btn_I_round.disabled=true
        Add_goals=dodavanje_golova(groupedTeamsArray)

        First_round_goals(Add_goals)
        compare_the_goals_of_the_First_round(Round_I_goals)
        Team_sorting(sorted_I_round)

        
    
        //sortTeams(sortirano_I_kolo)
        RoundI_II_III(sorted_I_round)
        const button =document.querySelectorAll(".name_of_grup_button")
        click_on_Grup(button,Round_I,izabranaDugmad_I)
        



    }
})
btn_II_round.addEventListener('click', function(e){
    btn_II_round.classList.remove("active")


    btn_II_round.classList.add("disable")
    btn_III_round.classList.add("active")
    const value=e.currentTarget
    if(value){

        btn_II_round.disabled=true

        Add_goals=dodavanje_golova(Round_I)
        Second_round_goals(Add_goals)
        compare_the_goals_of_the_Second_round(Round_II_goals)
        Team_sorting(sorted_II_round)
        RoundI_II_III(sorted_II_round)
        const button =document.querySelectorAll(".name_of_grup_button")
        click_on_Grup(button,Round_II,izabranaDugmad_II)
    

    }
})
btn_III_round.addEventListener('click', function(e){
    btn_III_round.classList.remove("active")


    btn_III_round.classList.add("disable")
    btn_Sixth.classList.add("active")
    const value=e.currentTarget
    if(value){

        btn_III_round.disabled=true
        Add_goals=dodavanje_golova(Round_II)
        Third_second_round_goals(Add_goals)
        compare_the_goals_of_the_Third_round(Round_III_goals)
        Team_sorting(sorted_III_round)
        //sortTeams(sortirano_III_kolo)
        RoundI_II_III(sorted_III_round)
        const button =document.querySelectorAll(".name_of_grup_button")
        click_on_Grup(button,Round_III,izabranaDugma_III)

      
        


    }
})











btn_Sixth.addEventListener('click', function(e){
    DIV_title_for_finalists.classList.remove("disable");
    DIV_title_for_finalists.classList.add('active');
    btn_Sixth.classList.remove("active")
    btn_Sixth.classList.add("disable")
    btn_Sixth_POINTS.classList.add("active")
    
    

    naslovi.forEach(naslov => {
        naslov.classList.remove('active');
    });

    // Prikazivanje samo naslova koji imaju id="naslov_16"
    naslovi.forEach(naslov => {
        if (naslov.id.startsWith('naslov_16')) {
            naslov.classList.add('active');
        }
    });

    const value=e.currentTarget
    if(value){
    

        btn_Sixth.disabled=true
        Round_of_6_grouping(sorted_III_round)
        Sixth_final(GRUPE_VIII)
        console.log(GRUPE_VIII, "SESTINA")
    
    }
})
btn_Sixth_POINTS.addEventListener('click', function(e){
    console.log(e)
    btn_Sixth_POINTS.classList.remove("active")
    btn_Sixth_POINTS.classList.add("disable")
    btn_IV_points.classList.add("active")
    const naslovi4 = document.querySelectorAll('[id^="naslov_4"]');
    const aktivniNaslovi = document.querySelectorAll('.naslov.active');

    if (aktivniNaslovi.length > 0) {
        // Ako postoji bilo koji aktivni naslov, dodajemo klasu .active samo naslovima koji počinju sa 'naslov_4'
        naslovi4.forEach(naslov => {
            naslov.classList.add('active');
        });
    }


    const value=e.currentTarget
    if(value){

        btn_Sixth_POINTS.disabled=true
        const golovi=dodavanje_golova(GRUPE_VIII)
        console.log(golovi,"sad")

        Round_of_Sixth_goals(golovi)
        console.log(Goals_6_final,"6")
        compare_the_goals_of_the_Round_of_Sixth_final(Goals_6_final)
        Team_sorting2(sorted_Sixth_final)
        Sixth_final_points(ROUND_Sixth)
        Grouping_quarters(sorted_Sixth_final)
        Quarter(Group_IV)

    }
})

btn_IV_points.addEventListener('click', function(e){
    btn_IV_points.classList.remove("active")
    btn_IV_points.classList.add("disable")
    btn_II_points.classList.add("active")
    const naslovi4 = document.querySelectorAll('[id^="naslov_2"]');
    const aktivniNaslovi = document.querySelectorAll('.naslov.active');

    if (aktivniNaslovi.length > 0) {
        // Ako postoji bilo koji aktivni naslov, dodajemo klasu .active samo naslovima koji počinju sa 'naslov_4'
        naslovi4.forEach(naslov => {
            naslov.classList.add('active');
        });
    }

    const value=e.currentTarget
    if(value){

        btn_IV_points.disabled=true
        const golovi=dodavanje_golova(Group_IV)

        Quarter_final_goals(golovi)
        compare_the_goals_of_the_Quarter_final(Goals_IV_final)
        Team_sorting3(sorted_IV_finale)

        Quarter_stitches(ROUND_IV)
        Grouping_semi_finals(sorted_IV_finale)
        Semi_finals(Group_II)


    }
})
btn_II_points.addEventListener('click', function(e){
    btn_II_points.classList.remove("active")
    btn_II_points.classList.add("disabel")
    btn_FINALE_points.classList.add("active")
    const naslov_Final= document.querySelectorAll('[id^="naslov_Final"]');
    const naslov_TRECE= document.querySelectorAll('[id^="naslov_TRECE"]');
    const aktivniNaslovi = document.querySelectorAll('.naslov.active');
    if (aktivniNaslovi.length > 0) {

        naslov_Final.forEach(naslov => {
            naslov.classList.add('active');
        });
        naslov_TRECE.forEach(naslov => {
            naslov.classList.add('active');
        });
    }
    const value=e.currentTarget
    if(value){

        btn_II_points.disabled=true
        const golovi=dodavanje_golova(Group_II)
        Semi_final_goals(golovi)
        compare_the_goals_of_the_Semi_finals(Goals_II_final)

        Semi_finals_Points(ROUND_FINALE_II)
        iselect_the_finalists(ROUND_FINALE_II);
        Finale(GRUPA_FINALISATA )
        trecemesto(GRUPA_TRECE_MESTO)
        const Goal_finalist=dodavanje_golova(GRUPA_FINALISATA)
        const Goal_finalist2=dodavanje_golova(GRUPA_TRECE_MESTO)
        compare_the_goals_of_the_Third_place(Goal_finalist2)
        compare_the_goals_of_the_Finale(Goal_finalist)
        //Sortiranje5(GRUPA_FINALISATA)
        //Sortiranje6(GRUPA_TRECE_MESTO)

    }
})

btn_FINALE_points.addEventListener('click', function(e){
    btn_FINALE_points.classList.remove("active")
    btn_II_points.classList.add("disabel")

    const value=e.currentTarget
    if(value){

        btn_FINALE_points.disabled=true

        Finalebodovi(GRUPA_FINALISATA )
        trecemestobodovi(GRUPA_TRECE_MESTO)
        uvecajSliku()
    }
})




function grupisaniTimovi() {
    const grupisaniTimoviSkup = Timovi.reduce((obj, tim) => {
        const grupa = tim.grupa;
        if (!obj.hasOwnProperty(grupa)) {
            obj[grupa] = [];
        }
        obj[grupa].push(tim);
        return obj;
    },{});
    const noviskup = Object.values(grupisaniTimoviSkup);

    return  noviskup

}
function Round_of_6_grouping(timovi){


    const grupa1=[]
    const grupa2=[]
    const grupa3=[]
    const grupa4=[]
    const grupa5=[]
    const grupa6=[]
    const grupa7=[]
    const grupa8=[]
    for(let i=0; i< timovi.length; i++){
        for(let a=0; a< timovi.length; a++){
            if(grupa1.length===0){
                grupa1.push(timovi[0][0],timovi[1][1])
            }
            if(grupa2.length===0){
                grupa2.push(timovi[2][0],timovi[3][1])
            }
            if(grupa3.length===0){  
                grupa3.push(timovi[0][1],timovi[1][0])
            }
            if(grupa4.length===0){
                grupa4.push(timovi[2][1],timovi[3][0])  
            }
            if(grupa5.length===0){
                grupa5.push(timovi[4][0],timovi[5][1])
            }
            if(grupa6.length===0){
                
                grupa6.push(timovi[6][0],timovi[7][1])
            }
            if(grupa7.length===0){
                grupa7.push(timovi[4][1],timovi[5][0])
            }
            if(grupa8.length===0){
                grupa8.push(timovi[6][1],timovi[7][0])
            }
        }
    }
    console.log(grupa1)
    GRUPE_VIII.push([...grupa1], [...grupa2],[...grupa3],[...grupa4],[...grupa5], [...grupa6],[...grupa7],[...grupa8])

}
function Grouping_quarters(timovi) {
    const grupa1=[]
    const grupa2=[]
    const grupa3=[]
    const grupa4=[]
    for(let i=0; i< timovi.length; i++){
        for(let a=0; a< timovi.length; a++){
            if(grupa1.length===0){
                grupa1.push(timovi[0][0],timovi[2][0])
            }
            if(grupa2.length===0){
                grupa2.push(timovi[1][0],timovi[3][0])
            }
            if(grupa3.length===0){  
                grupa3.push(timovi[6][0],timovi[4][0])  
            }
            if(grupa4.length===0){
                grupa4.push(timovi[5][0],timovi[7][0]) 
            }
        }
    }
    console.log(grupa1)
    Group_IV.push([...grupa1], [...grupa2],[...grupa3],[...grupa4])

}
function Grouping_semi_finals(arr) {
   

    const prviTreci = [];
    const drugiCetvrti = [];

    if (arr.length >= 1 && arr[0].length >= 1 && arr.length >= 3 && arr[2].length >= 1) {
        prviTreci.push(arr[0][0], arr[2][0]); // Prvi i treći element
    }

    if (arr.length >= 2 && arr[1].length >= 1 && arr.length >= 4 && arr[3].length >= 1) {
        drugiCetvrti.push(arr[1][0], arr[3][0]); // Drugi i četvrti element
    }

    Group_II.push(prviTreci, drugiCetvrti);


    //console.log(GRUPE_II, 'GRUPISANJE POLUFINALE ZA DRUGO MESO');
}
function  Grouping_Finale(arr) {



    arr.forEach((grupa) => {
        const prvaDva = grupa.slice(0, 2);
        const drugaDva = grupa.slice(2, 4);
        GRUPA_FINALISATA.push(JSON.parse(JSON.stringify(prvaDva )));
        GRUPA_TRECE_MESTO.push(JSON.parse(JSON.stringify(drugaDva )));

    })

}
function dodavanje_golova(grupe){
    console.log(grupe,"grupe")

    const noviTimovi = grupe.map(grupaTimova => {

        return grupaTimova.map(tim => {
            const noviTim = {...tim};
            if (!noviTim.hasOwnProperty("golovi")&&!noviTim.hasOwnProperty("ukupni_golovi_kroz_kola")) {
                const golovi=Math.floor(Math.random() * 10)
                noviTim.ukupni_golovi_kroz_kola=golovi
                noviTim.golovi = {
                    I_Kolo: [golovi]
                }
            }else if(noviTim.golovi.hasOwnProperty("I_Kolo")&&!noviTim.golovi.hasOwnProperty("II_Kolo")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.ukupni_golovi_kroz_kola+=golovi
                noviTim.golovi.II_Kolo = [golovi];
    
            }else if(noviTim.golovi.hasOwnProperty("I_Kolo")&&noviTim.golovi.hasOwnProperty("II_Kolo")&&!noviTim.golovi.hasOwnProperty("III_Kolo")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.ukupni_golovi_kroz_kola+=golovi
                noviTim.golovi.III_Kolo = [golovi];

            }else if(noviTim.golovi.hasOwnProperty("III_Kolo")&&!noviTim.hasOwnProperty("golovi_Round_16")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.golovi_Round_16=golovi
    
            }else if(noviTim.hasOwnProperty("golovi_Round_16")&&!noviTim.hasOwnProperty("golovi_Quarter_finale")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.golovi_Quarter_finale= golovi;

            }else if(noviTim.hasOwnProperty("golovi_Quarter_finale")&&!noviTim.hasOwnProperty("golovi_Semi_finale")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.golovi_Semi_finale= golovi;

            }else if(noviTim.hasOwnProperty("golovi_Semi_finale")&&noviTim.kraj==="finale"&&!noviTim.golovi.hasOwnProperty("golovi_finale")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.golovi_finale= golovi;
            }else if(noviTim.hasOwnProperty("golovi_Semi_finale")&&noviTim.kraj==="za trece mesto"&&!noviTim.golovi.hasOwnProperty("golovi_finale")){
                const golovi=Math.floor(Math.random() * 10)
                noviTim.golovi_trece_mesto= golovi;
    
            }
            return noviTim;
        });
    });

    return noviTimovi;

}






function veci(button, skup) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('output-group');
    var foundObj = skup.find(obj => obj.button === button);
    if (foundObj) {
        return foundObj.timovi;
    }
    return null;
}


function click_on_Grup(elements, grups,izabranaDugmad) {


    elements.forEach(function (element) {
       
    
        element.addEventListener('click', function () {
            
            const button = element.textContent;
        
            console.log(button,"buton")
            const foundButton = izabranaDugmad.find(item => item.button === button);

            var newDiv = document.createElement('div');
            newDiv.classList.add('output-group');
            var newDiv = document.createElement('div');
            newDiv.classList.add('output-group');
            var img_stadium_1 = document.createElement('img');
            img_stadium_1.id='output_grup_img';
            var img_stadium_2 = document.createElement('img');
            img_stadium_2.id='output_grup_img';
            const football_stadium = getRandomStadiumImage();
            

            elements.forEach(function (btn) {
                btn.style.pointerEvents = 'none';
            })

            const newObject = {
                button: button,
                stadium: football_stadium,
                timovi: [] // Početni prazan niz timova unutar objekta
            };

            if(!foundButton&&izabranaDugmad.length === 0){
                grups.forEach(grupa => {
                    grupa.forEach(team => {
                        if (team.grupa === button && izabranaDugmad.length === 0) {
                            newObject.timovi.push(team);
                            var newDivTim = document.createElement('div');
                            newDivTim.classList.add('output-tim');
                            const img = document.createElement("img");
                            img.id = "tim_output_img";
                            img.src = team.slika;
                            const p1 = document.createElement("p");
                            p1.id = "tim_output_slovo";
                            const prvoSlovo = team.ime.split("", 1);
                            const slovoa = team.ime.slice(1);
                            p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;
                            newDivTim.append(img,p1);
                            newDiv.appendChild(newDivTim);
                        }
                    });
                });
                var closeButton = document.createElement('button');
                closeButton.classList.add('close_button');
                closeButton.textContent = 'X';

                closeButton.addEventListener('click', function() {
                    newDiv.remove();
                    elements.forEach(function(btn) {
                        btn.style.pointerEvents = 'auto';
                    });
                });
                img_stadium_1.src=`${football_stadium[0]}`
                img_stadium_2.src=`${football_stadium[1]}`
                newDiv.append(closeButton,img_stadium_1,img_stadium_2);
                document.body.appendChild(newDiv);
                izabranaDugmad.push(newObject)
                
            }else {
                const matchingElements = izabranaDugmad.filter(item => item.button === button);

                if (matchingElements.length > 0) {
                
                    matchingElements.forEach(matchingElement => {
                            const teams = matchingElement.timovi;
                            const stadium = matchingElement.stadium;
                    
                        teams.forEach(team => {
                            var newDivTim = document.createElement('div');
                            newDivTim.classList.add('output-tim');
                            const img = document.createElement("img");
                            img.id = "tim_output_img";
                            img.src = team.slika;
                            const p1 = document.createElement("p");
                            p1.id = "tim_output_slovo";
                            const prvoSlovo = team.ime.split("", 1);
                            const slovoa = team.ime.slice(1);
                            p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;
                            newDivTim.append(img,p1);
                            newDiv.appendChild(newDivTim);
                        })
                        var closeButton = document.createElement('button');
                        closeButton.classList.add('close_button');
                        closeButton.textContent = 'X';

                        closeButton.addEventListener('click', function() {
                            newDiv.remove();
                            elements.forEach(function(btn) {
                                btn.style.pointerEvents = 'auto';
                            });
                        });
                        img_stadium_1.src=`${stadium [0]}`
                        img_stadium_2.src=`${stadium [1]}`
                        newDiv.append(closeButton,img_stadium_1,img_stadium_2);
                        document.body.appendChild(newDiv);
                      
                        });
                }else{
                    grups.forEach(grupa => {
                        grupa.forEach(team => {
                            if (team.grupa === button && izabranaDugmad.length >0) {
                                newObject.timovi.push(team);
                                var newDivTim = document.createElement('div');
                                newDivTim.classList.add('output-tim');
                                const img = document.createElement("img");
                                img.id = "tim_output_img";
                                img.src = team.slika;
                                const p1 = document.createElement("p");
                                p1.id = "tim_output_slovo";
                                const prvoSlovo = team.ime.split("", 1);
                                const slovoa = team.ime.slice(1);
                                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;
                                newDivTim.append(img,p1);
                                newDiv.appendChild(newDivTim);
                            }
                        });
                    });
                    var closeButton = document.createElement('button');
                    closeButton.classList.add('close_button');
                    closeButton.textContent = 'X';

                    closeButton.addEventListener('click', function() {
                        newDiv.remove();
                        elements.forEach(function(btn) {
                            btn.style.pointerEvents = 'auto';
                        });
                    });
                    img_stadium_1.src=`${football_stadium[0]}`
                    img_stadium_2.src=`${football_stadium[1]}`
                    newDiv.append(closeButton,img_stadium_1,img_stadium_2);
                    document.body.appendChild(newDiv);
                    izabranaDugmad.push(newObject)
                }
            }
        });
    });
}

function getRandomStadiumImage() {
    // Definišite grupu slika stadiona (možete koristiti linkove ka slikama)
    const stadiumImages = [
        "NEW STADIUM/ahmad.png",
        "NEW STADIUM/albayt.png",
        "NEW STADIUM/aljanoub.png",
        "NEW STADIUM/althumama.png",
        "NEW STADIUM/educationcity.png",
        "NEW STADIUM/khalifa.png",
        "NEW STADIUM/lusail.png",
        "NEW STADIUM/stadium974.png"
        // Dodajte ostale putanje ka slikama stadiona koje želite
    ];

    // Generišemo nasumični indeks od 0 do dužine niza slika stadiona
    const randomIndex1 = Math.floor(Math.random() * stadiumImages.length);
    const randomIndex2 = Math.floor(Math.random() * stadiumImages.length);

    // Vraćamo nasumično izabranu sliku stadiona
    return [stadiumImages[randomIndex1], stadiumImages[randomIndex2]];
}

function First_round_goals(GRUPA) {

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const golovi = tim.golovi

            if (!tim.hasOwnProperty('prvoKolo_poluvreme') && !tim.hasOwnProperty('drugoKolo_poluvreme') && !tim.hasOwnProperty('treceKolo_poluvreme'))
            {
            
                tim.prvoKolo_poluvreme = {
                    poluvreme1: [],
                    poluvreme2: []
                };
                if (golovi.I_Kolo.includes(0)) {
                    tim.prvoKolo_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.prvoKolo_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (golovi.I_Kolo > 0) {
                        for (let j = 1; j <= golovi.I_Kolo.length; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.prvoKolo_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.prvoKolo_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Round_I_goals.push(JSON.parse(JSON.stringify(grupe)));
        
    }
}
function Second_round_goals(GRUPA) {
   
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const golovi = tim.golovi

            if (tim.hasOwnProperty('prvoKolo_poluvreme') && !tim.hasOwnProperty('drugoKolo_poluvreme') && !tim.hasOwnProperty('treceKolo_poluvreme')) {
                tim.drugoKolo_poluvreme = {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (golovi.II_Kolo.includes(0)) {
                    tim.drugoKolo_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.drugoKolo_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else {
                    if (golovi.II_Kolo > 0) {
                        for (let j = 1; j <= golovi.II_Kolo.length; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.drugoKolo_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.drugoKolo_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
           
        }
        Round_II_goals.push(JSON.parse(JSON.stringify(grupe)));
    }
}
function Third_second_round_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const golovi = tim.golovi
            if (tim.hasOwnProperty('prvoKolo_poluvreme') && tim.hasOwnProperty('drugoKolo_poluvreme') && !tim.hasOwnProperty('treceKolo_poluvreme')) {
                tim.treceKolo_poluvreme = {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (golovi.III_Kolo.includes(0)) {
                    tim.treceKolo_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.treceKolo_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (golovi.III_Kolo > 0) {
                        for (let j = 1; j <= golovi.III_Kolo.length; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.treceKolo_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.treceKolo_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Round_III_goals.push(JSON.parse(JSON.stringify(grupe)));
    }
}
function Round_of_Sixth_goals(GRUPA) {

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            

            if (tim.hasOwnProperty('treceKolo_poluvreme') && !tim.hasOwnProperty('VIII_poluvreme')) {
                tim.VIII_poluvreme= {
                    poluvreme1: [],
                    poluvreme2: []
                };
                

                if (tim.golovi_Round_16.includes(0)) {
                    tim.VIII_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.VIII_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (tim.golovi_Round_16 > 0) {
                        for (let j = 1; j <= golovi.VIII_poluvreme; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.VIII_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.VIII_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Goals_6_final.push(grupe);
        console.log(Goals_6_final,"66")
    }
}
function Quarter_final_goals(GRUPA) {
   
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;

            if (tim.hasOwnProperty('VIII_poluvreme') && !tim.hasOwnProperty('IV_poluvreme')) {
                tim.IV_poluvreme= {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (tim.golovi_Quarter_finale.includes(0)) {
                    tim.IV_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.IV_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (tim.golovi_Quarter_finale> 0) {
                        for (let j = 1; j <= golovi.golovi_IV_finale; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.IV_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.IV_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Goals_IV_final.push(grupe);
       
    }
}
function Semi_final_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;

            if (tim.hasOwnProperty('IV_poluvreme') && !tim.hasOwnProperty('II_poluvreme')) {
                tim.II_poluvreme= {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (tim.golovi_Semi_finale.includes(0)) {
                    tim.II_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.II_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (tim.golovi_Semi_finale> 0) {
                        for (let j = 1; j <= golovi.golovi_II_finale; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.II_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.II_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Goals_II_final.push(grupe);
    
    }
}
function Finale_goals(GRUPA) {

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            if (tim.hasOwnProperty('II_poluvreme') && !tim.hasOwnProperty('Finale_poluvreme')) {
                tim.Finale_poluvreme= {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (tim.golovi_finale.includes(0)) {
                    tim.Finale_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.Finale_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (tim.Finale_poluvreme > 0) {
                        for (let j = 1; j <= golovi.Finale_poluvreme; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.Finale_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.Finale_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Goals_final.push(grupe);
    }
}
function third_place_goals(GRUPA) {

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            if (tim.hasOwnProperty('II_poluvreme') && !tim.hasOwnProperty('trece_mesto_poluvreme')) {
                tim.trece_mesto_poluvreme= {
                    poluvreme1: [],
                    poluvreme2: []
                };

                if (tim.golovi_trece_mesto.includes(0)) {
                    tim.trece_mesto_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.trece_mesto_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                }else{
                    if (tim.trece_mesto_poluvreme > 0) {
                        for (let j = 1; j <= golovi.trece_mesto_poluvreme; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.trece_mesto_poluvreme.poluvreme1.push({ gol: 1, min: minuti_prvog });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.trece_mesto_poluvreme.poluvreme2.push({ gol: 1, min: minuti_drugo });
                            }
                        }
                    }
                }
            }
        }
        Goals_third_place.push(grupe);
    }
}



function compare_the_goals_of_the_First_round(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++){
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];

        if (prvi.golovi.I_Kolo > drugi.golovi.I_Kolo) {
            prvi.bodovi=3
            drugi.bodovi=0
            prvi.parovi="prvi par prvog kola"
            drugi.parovi="prvi par prvog kola"
            prvi.bodovi_po_kolima= { bodovi_kolo1: 3 };
            drugi.bodovi_po_kolima = { bodovi_kolo1: 0 } ;

        }else if (prvi.golovi.I_Kolo < drugi.golovi.I_Kolo ) {
            prvi.bodovi=0
            drugi.bodovi=3
            prvi.parovi="prvi par prvog kola"
            drugi.parovi="prvi par prvog kola"
            prvi.bodovi_po_kolima = { bodovi_kolo1: 0 };
            drugi.bodovi_po_kolima = { bodovi_kolo1: 3 };
        }else {
            prvi.bodovi=1
            drugi.bodovi=1
            prvi.parovi="prvi par prvog kola"
            drugi.parovi="prvi par prvog kola"
            prvi.bodovi_po_kolima = { bodovi_kolo1: 1 };
            drugi.bodovi_po_kolima = { bodovi_kolo1: 1 };

        }
        if (treci.golovi.I_Kolo> cetvrti.golovi.I_Kolo) {
            treci.bodovi=3
            cetvrti.bodovi=0
            cetvrti.parovi="drugi par prvog kola"
            treci.parovi="drugi par prvog kola"
            treci.bodovi_po_kolima = { bodovi_kolo1: 3 };
            cetvrti.bodovi_po_kolima= { bodovi_kolo1: 0 };
        } else if (treci.golovi.I_Kolo< cetvrti.golovi.I_Kolo) {
            treci.bodovi=0
            cetvrti.bodovi=3
            cetvrti.parovi="drugi par prvog kola"
            treci.parovi="drugi par prvog kola"
            treci.bodovi_po_kolima = { bodovi_kolo1: 0 };
            cetvrti.bodovi_po_kolima = { bodovi_kolo1: 3 };

        }else{
            treci.bodovi=1
            cetvrti.bodovi=1
            cetvrti.parovi="drugi par prvog kola"
            treci.parovi="drugi par prvog kola"
            treci.bodovi_po_kolima = { bodovi_kolo1:1 };
            cetvrti.bodovi_po_kolima = { bodovi_kolo1: 1 };

        }
        Round_I.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        
        sorted_I_round.push(noviTimovi[i]);
        
    }

}
function compare_the_goals_of_the_Second_round(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++){
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];

        if (prvi.golovi.II_Kolo > treci.golovi.II_Kolo) {
            prvi.bodovi+=3
            treci.bodovi+=0
            prvi.parovi="prvi par drugog kola"
            treci.parovi="prvi par drugog kola"
            prvi.bodovi_po_kolima.bodovi_kolo2= 3 ;;
            treci.bodovi_po_kolima.bodovi_kolo2=  0 ;

        }else if (prvi.golovi.II_Kolo < treci.golovi.II_Kolo ) {
            prvi.bodovi+=0
            treci.bodovi+=3
            prvi.parovi="prvi par drugog kola"
            treci.parovi="prvi par drugog kola"
            prvi.bodovi_po_kolima.bodovi_kolo2= 0 ;
            treci.bodovi_po_kolima.bodovi_kolo2=  3 ;
        }else {
            prvi.bodovi+=1
            treci.bodovi+=1
            prvi.parovi="prvi par drugog kola"
            treci.parovi="prvi par drugog kola"
            prvi.bodovi_po_kolima.bodovi_kolo2=  1 ;
            treci.bodovi_po_kolima.bodovi_kolo2=  1 ;

        }
        if (drugi.golovi.II_Kolo> cetvrti.golovi.II_Kolo) {
            drugi.bodovi+=3
            cetvrti.bodovi+=0
            cetvrti.parovi="drugi par drugog kola"
            drugi.parovi="drugi par drugog kola"
            drugi.bodovi_po_kolima.bodovi_kolo2=  3 ;
            cetvrti.bodovi_po_kolima.bodovi_kolo2=  0 ;
        } else if (drugi.golovi.II_Kolo< cetvrti.golovi.II_Kolo) {
            drugi.bodovi+=0
            cetvrti.bodovi+=3
            cetvrti.parovi="drugi par drugog kola"
            drugi.parovi="drugi par drugog kola"
            drugi.bodovi_po_kolima.bodovi_kolo2=  0 ;
            cetvrti.bodovi_po_kolima.bodovi_kolo2=  3 ;

        }else{
            drugi.bodovi+=1
            cetvrti.bodovi+=1
            cetvrti.parovi="drugi par drugog kola"
            drugi.parovi="drugi par drugog kola"
            drugi.bodovi_po_kolima.bodovi_kolo2= 1 ;
            cetvrti.bodovi_po_kolima.bodovi_kolo2=  1 ;

        }
        Round_II.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_II_round.push(JSON.parse(JSON.stringify(noviTimovi[i])));

    }

}
function compare_the_goals_of_the_Third_round(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++){

        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];

        if (prvi.golovi.III_Kolo > cetvrti.golovi.III_Kolo) {
            prvi.bodovi+=3
            cetvrti.bodovi+=0
            prvi.parovi="prvi par treceg kola"
            cetvrti.parovi="prvi par treceg kola"
            prvi.bodovi_po_kolima.bodovi_kolo3= 3 ;;
            cetvrti.bodovi_po_kolima.bodovi_kolo3=  0 ;

        }else if (prvi.golovi.III_Kolo < cetvrti.golovi.III_Kolo ) {
            prvi.bodovi+=0
            cetvrti.bodovi+=3
            prvi.parovi="prvi par treceg kola"
            cetvrti.parovi="prvi par treceg kola"
            prvi.bodovi_po_kolima.bodovi_kolo3= 0 ;
            cetvrti.bodovi_po_kolima.bodovi_kolo3=  3 ;
        }else {
            prvi.bodovi+=1
            cetvrti.bodovi+=1
            prvi.parovi="prvi par treceg kola"
            cetvrti.parovi="prvi par treceg kola"
            prvi.bodovi_po_kolima.bodovi_kolo3=  1 ;
            cetvrti.bodovi_po_kolima.bodovi_kolo3=  1 ;

        }
        if (drugi.golovi.III_Kolo> treci.golovi.III_Kolo) {
            drugi.bodovi+=3
            treci.bodovi+=0
            drugi.parovi="drugi par treceg kola"
            treci.parovi="drugi par treceg kola"
            drugi.bodovi_po_kolima.bodovi_kolo3=  3 ;
            treci.bodovi_po_kolima.bodovi_kolo3=  0 ;
        } else if (drugi.golovi.II_Kolo<  treci.golovi.II_Kolo) {
            drugi.bodovi+=0
            treci.bodovi+=3
            drugi.parovi="drugi par treceg kola"
            treci.parovi="drugi par treceg kola"
            drugi.bodovi_po_kolima.bodovi_kolo3=  0 ;
            treci.bodovi_po_kolima.bodovi_kolo3=  3 ;

        }else{
            drugi.bodovi+=1
            treci.bodovi+=1
            drugi.parovi="drugi par treceg kola"
            treci.parovi="drugi par treceg kola"
            drugi.bodovi_po_kolima.bodovi_kolo3= 1 ;
            treci.bodovi_po_kolima.bodovi_kolo3=  1 ;

        }
        Round_III.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_III_round.push(JSON.parse(JSON.stringify(noviTimovi[i])));

    }

}
function compare_the_goals_of_the_Round_of_Sixth_final(noviTimovi){


    for (let i = 0; i < noviTimovi.length; i++){


        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        



        if (prvi.golovi_Round_16> drugi.golovi_Round_16) {

            prvi.bodovi_osmine=3
            drugi.bodovi_osmine=0
            prvi.kraj="cetvrtfinalista"
            drugi.kraj="ispao"

        }if (prvi.golovi_Round_16 < drugi.golovi_Round_16) {

            prvi.bodovi_osmine=0
            drugi.bodovi_osmine=3
            prvi.kraj="ispao"
            drugi.kraj="cetvrtfinale"

        } if(prvi.golovi_Round_16 === drugi.golovi_Round_16) {

            let timovi1=[prvi,drugi]
            let izbor=Math.floor(Math.random() * timovi1.length)
            const penali1=Math.floor(Math.random() *5)
            const penali2=Math.floor(Math.random() *5)

            prvi.penali_VIII= penali1 ;
            drugi.penali_VIII= penali2 ;



            if( prvi.penali_VIII > drugi.penali_VIII){

                prvi.kraj="cetvrtfinalista"
                drugi.kraj="ispao"
                prvi.bodovi_osmine=3
                drugi.bodovi_osmine=0

            }if( prvi.penali_VIII < drugi.penali_VIII){

                prvi.kraj="ispao"
                drugi.kraj="cetvrtfinalista"
                prvi.bodovi_osmine=0
                drugi.bodovi_osmine=3

            }if(prvi.penali_VIII === drugi.penali_VIII){
                if(izbor === 0){

                    prvi.kraj="cetvrtfinalista"
                    drugi.kraj="ispao"
                    prvi.penali_VIII+=1
                    drugi.penali_VIII+=0
                    prvi.bodovi_osmine=3
                    drugi.bodovi_osmine=0

                }if(izbor === 1){

                    prvi.kraj="ispao"
                    drugi.kraj="cetvrtfinalista"
                    prvi.penali_VIII+=0
                    drugi.penali_VIII+=1
                    prvi.bodovi_osmine=3
                    drugi.bodovi_osmine=0
                }
            }
        }
        


        ROUND_Sixth.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_Sixth_final.push(JSON.parse(JSON.stringify(noviTimovi[i])));
   

    }

}
function compare_the_goals_of_the_Quarter_final(noviTimovi){



    for (let i = 0; i < noviTimovi.length; i++){

        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];



        if (prvi.golovi_Quarter_finale> drugi.golovi_Quarter_finale) {

            prvi.bodovi_cetvrtina=3
            drugi.bodovi_cetvrtina=0
            prvi.kraj="polufinale"
            drugi.kraj="ispao"

        }if (prvi.golovi_Quarter_finale < drugi.golovi_Quarter_finale ) {

            prvi.bodovi_cetvrtina=0
            drugi.bodovi_cetvrtina=3
            prvi.kraj="ispao"
            drugi.kraj="polufinale"

        } if(prvi.golovi_Quarter_finale === drugi.golovi_Quarter_finale) {

            let timovi1=[prvi,drugi]
            let izbor=Math.floor(Math.random() * timovi1.length)
            const penali1=Math.floor(Math.random() *5)
            const penali2=Math.floor(Math.random() *5)

            prvi.penali_IV= penali1 ;
            drugi.penali_IV =penali2 ;



            if( prvi.penali_IV > drugi.penali_IV){

                prvi.kraj="polufinale"
                drugi.kraj="ispao"
                prvi.bodovi_cetvrtina=3
                drugi.bodovi_cetvrtina=0

            }if( prvi.penali_IV < drugi.penali_IV){

                prvi.kraj="ispao"
                drugi.kraj="polufinale"
                prvi.bodovi_cetvrtina=0
                drugi.bodovi_cetvrtina=3

            }if(prvi.penali_IV === drugi.penali_IV){
                if(izbor === 0){

                    prvi.kraj="polufinale"
                    drugi.kraj="ispao"
                    prvi.penali_IV+=1
                    drugi.penali_IV+=0
                    prvi.bodovi_cetvrtina=3
                    drugi.bodovi_cetvrtina=0

                }else{

                    prvi.kraj="ispao"
                    drugi.kraj="polufinale"
                    prvi.penali_IV+=0
                    drugi.penali_IV+=1
                    prvi.bodovi_cetvrtina=0
                    drugi.bodovi_cetvrtina=3
                }
            }
        }
        ROUND_IV.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_IV_finale.push(JSON.parse(JSON.stringify(noviTimovi[i])));

    }

}
function compare_the_goals_of_the_Semi_finals(noviTimovi){
    //console.log(noviTimovi, "uporediBodove_II_Finale")


    for (let i = 0; i < noviTimovi.length; i++){
    

        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.golovi_Semi_finale>drugi.golovi_Semi_finale) {

            prvi.bodovi_polufinale=3
            drugi.bodovi_polufinale=0
            prvi.kraj="finale"
            drugi.kraj="za trece mesto"

        }if (prvi.golovi_Semi_finale < drugi.golovi_Semi_finale ) {

            prvi.bodovi_polufinale=0
            drugi.bodovi_polufinale=3
            prvi.kraj="za trece mesto"
            drugi.kraj="finale"

        } if(prvi.golovi_Semi_finale=== drugi.golovi_Semi_finale) {

            let timovi1=[prvi,drugi]
            let izbor=Math.floor(Math.random() * timovi1.length)
            const penali1=Math.floor(Math.random() *5)
            const penali2=Math.floor(Math.random() *5)

            prvi.penali_II= penali1 ;
            drugi.penali_II =penali2 ;

            if( prvi.penali_II > drugi.penali_II){

                prvi.kraj="finale"
                drugi.kraj="za trece mesto"
                drugi.bodovi_polufinale=3
                drugi.bodovi_polufinale=0

            }if( prvi.penali_II < drugi.penali_II){

                prvi.kraj="za trece mesto"
                drugi.kraj="finale"
                prvi.bodovi_polufinale=0
                drugi.bodovi_polufinale=3

            }if(prvi.penali_II === drugi.penali_II){
                if(izbor === 0){

                    prvi.kraj="finale"
                    drugi.kraj="za trece mesto"
                    prvi.penali_II+=1
                    drugi.penali_II+=0
                    prvi.bodovi_polufinale=3
                    drugi.bodovi_polufinale=0

                }if(izbor === 1){

                    prvi.kraj="za trece mesto"
                    drugi.kraj="finale"
                    prvi.penali_II+=0
                    drugi.penali_II+=1
                    prvi.bodovi_polufinale=0
                    drugi.bodovi_polufinale=3
                }
            }
        }
        ROUND_FINALE_II.push(JSON.parse(JSON.stringify( noviTimovi[i] )));
        console.log(noviTimovi, "uporediBodove_II_Finale")
        //sortirano_III_vs_FINAL.push(JSON.parse(JSON.stringify(noviTimovi[i])));

    
    }

}
function compare_the_goals_of_the_Finale(noviTimovi){


    for (let i = 0; i < noviTimovi.length; i++){

        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];



        if (prvi.golovi_finale> drugi.golovi_finale) {

            prvi.bodovi_finale=3
            drugi.bodovi_finale=0
            prvi.kraj="prvak"
            drugi.kraj="drugomesto"

        }if (prvi.golovi_finale < drugi.golovi_finale ) {

            prvi.bodovi_finale=0
            drugi.bodovi_finale=3
            prvi.kraj="drugomesto"
            drugi.kraj="prvak"

        } if(prvi.golovi_finale === drugi.golovi_finale) {

            let timovi1=[prvi,drugi]
            let izbor=Math.floor(Math.random() * timovi1.length)
            const penali1=Math.floor(Math.random() *5)
            const penali2=Math.floor(Math.random() *5)

            prvi.penali_finale= penali1 ;
            drugi.penali_finale=penali2 ;



            if( prvi.penali_finale > drugi.penali_finale){

                prvi.kraj="prvak"
                drugi.kraj="drugomesto"
                prvi.bodovi_finale=3
                drugi.bodovi_finale=0

            }if( prvi.penali_finale < drugi.penali_finale){

                prvi.kraj="drugomesto"
                drugi.kraj="prvak"
                prvi.bodovi_finale=0
                drugi.bodovi_finale=3

            }if(prvi.penali_finale === drugi.penali_finale){
                if(izbor === 0){

                    prvi.kraj="finale"
                    drugi.kraj="za trece mesto"
                    prvi.penali_finale+=1
                    drugi.penali_finale+=0
                    prvi.bodovi_finale=3
                    drugi.bodovi_finalee=0

                }if(izbor === 1){

                    prvi.kraj="za trece mesto"
                    drugi.kraj="finale"
                    prvi.penali_finale+=0
                    drugi.penali_finale+=1
                    prvi.bodovi_finale=0
                    drugi.bodovi_finale=3
                }
            }
        }
        GRUPA_FINALISATA.length = 0
        GRUPA_FINALISATA.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(GRUPA_FINALISATA)

        sortirano_finale.push(JSON.parse(JSON.stringify(noviTimovi[i])));

    }

}
function compare_the_goals_of_the_Third_place(noviTimovi){
    //console.log(noviTimovi, "pokazivanje timova finale")

    for (let i = 0; i < noviTimovi.length; i++){

        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];



        if (prvi.golovi_trece_mesto> drugi.golovi_trece_mesto) {

            prvi.bodovi_trece_mesto=3
            drugi.bodovi_trece_mesto=0
            prvi.kraj="treci"
            drugi.kraj="ispao"

        }if (prvi.golovi_trece_mesto< drugi.golovi_trece_mesto ) {

            prvi.bodovi_trece_mesto=0
            drugi.bodovi_trece_mesto=3
            prvi.kraj="ispao"
            drugi.kraj="treci"

        } if(prvi.golovi_trece_mesto === drugi.golovi_trece_mesto) {

            let timovi1=[prvi,drugi]
            let izbor=Math.floor(Math.random() * timovi1.length)
            const penali1=Math.floor(Math.random() *5)
            const penali2=Math.floor(Math.random() *5)

            prvi.penali_trece_mesto= penali1 ;
            drugi.penali_trece_mesto=penali2 ;



            if( prvi.penali_trece_mesto > drugi.penali_trece_mesto){

                prvi.kraj="treci"
                drugi.kraj="ispao"
                prvi.bodovi_trece_mesto=3
                drugi.bodovi_trece_mesto=0

            }if( prvi.penali_trece_mesto < drugi.penali_trece_mesto){

                prvi.kraj="ispao"
                drugi.kraj="treci"
                prvi.bodovi_trece_mesto=0
                drugi.bodovi_trece_mesto=3

            }if(prvi.penali_trece_mesto === drugi.penali_trece_mesto){
                if(izbor === 0){

                    prvi.kraj="treci"
                    drugi.kraj="ispao"
                    prvi.penali_trece_mesto+=1
                    drugi.penali_trece_mesto+=0
                    prvi.bodovi_trece_mesto=3
                    drugi.bodovi_trece_mesto=0

                }if(izbor === 1){

                    prvi.kraj="ispao"
                    drugi.kraj="treci"
                    prvi.penali_trece_mesto+=0
                    drugi.penali_trece_mesto+=1
                    prvi.bodovi_trece_mesto=0
                    drugi.bodovi_trece_mesto=3
                }
            }
        }
        GRUPA_TRECE_MESTO.length = 0
        GRUPA_TRECE_MESTO.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sortirano_III_vs_FINAL.push(JSON.parse(JSON.stringify(noviTimovi[i])));
    }
}




function Team_sorting(arr) {
    arr.forEach(group => {
    group.sort((a, b) => {
        if (a.bodovi !== b.bodovi) {
            return b.bodovi - a.bodovi;
        }
            return b.ukupni_golovi_kroz_kola - a.ukupni_golovi_kroz_kola;
        });
    });
}
function Team_sorting2(arr){
    arr.forEach(group => {
        group.sort((a, b) => {
            if (a.bodovi_osmine!== b.bodovi_osmine) {
                return b.bodovi_osmine - a.bodovi_osmine;
            }
        });
    });

}
function Team_sorting3(arr){
    arr.forEach(group => {

        group.sort((a, b) => {
            if (a.bodovi_cetvrtina !== b.bodovi_cetvrtina) {
                return b.bodovi_cetvrtina - a.bodovi_cetvrtina;
            }
        });
    });


}
function iselect_the_finalists(timovi) {
    const skup1 = [];
    const skup2 = [];

    timovi.forEach(grupa => {
        grupa.forEach(utakmica => {
            if (utakmica.kraj === "finale") {
                skup1.push(utakmica);
            }
        });
        grupa.forEach(utakmica => {
            if (utakmica.kraj === "za trece mesto") {
                skup2.push(utakmica);
            }
        });
    });
    GRUPA_FINALISATA.push(skup1);
    GRUPA_TRECE_MESTO.push(skup2);
}
function Sortiranje5(arr){
    arr.forEach(group => {

        group.sort((a, b) => {
            if (a.bodovi_finale !== b.bodovi_finale ) {
                return b.bodovi_finale - a.bodovi_finale;
            }
        });
    });


}
function Sortiranje6(arr){
    arr.forEach(group => {

        group.sort((a, b) => {
            if (a.bodovi_trece_mesto !== b.bodovi_trece_mesto ) {
                return b.bodovi_trece_mesto - a.bodovi_trece_mesto;
            }
        });
    });


}









function  All_tims(){
    const svi_timovi=document.querySelector(".container_all_of_tims")
    const Div=document.createElement("div")
    Div.classList.add("container_svih_timova")

    for (let j=0; j<Timovi.length; j++){
            Div.innerHTML+=
        `
            <div class="container_tim_grupe_F">
                <img id="front_face" src="${Timovi[j].slika}">
                <p id="back_face" >${Timovi[j].ime}</p>

            </div>  
        `
        svi_timovi.append(Div)
    }

}
function Group_view(grupisaniTimoviSkup1){
    const containerGrupa = document.querySelector(".container_all_of_Grup");

  // Uklonite prethodno prikazane podatke
    containerGrupa.innerHTML = "";

    grupisaniTimoviSkup1.forEach(grupa => {
        const div1 = document.createElement("div");
        div1.classList.add("containet_of_Grup");
        const div2 = document.createElement("div");
        div2.classList.add("container_tims_of_grup");
        const h2 = document.createElement("button");
        h2.classList.add("name_of_grup_button");

        const line= document.createElement("div");
        line.classList.add("line");
        



        grupa.forEach(tim => {
            // Kreirajte elemente i ažurirajte podatke
            const timDiv = document.createElement("div");
            timDiv.classList.add("container_of_tim");
            timDiv.id = tim.id;

            const img = document.createElement("img");
            img.id = "tim_grup_img";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo";
            const prvoSlovo = tim.ime.split("", 1);
            const slovoa = tim.ime.slice(1);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

            const p2 = document.createElement("p");
            p2.id = "tim_img_ball";

            // Dodajte elemente u div2
            timDiv.appendChild(img);
            timDiv.appendChild(p1);
            timDiv.appendChild(p2);

            div2.appendChild(timDiv);
        });

        const grupaSlovo = grupa[0].grupa.split("", 1);
        h2.innerText = grupaSlovo + "grupa";

        div1.appendChild(h2);
        div1.appendChild(div2);

        // Dodajte div1 u containerGrupa
        containerGrupa.appendChild(div1);
    });
}







function RoundI_II_III(grupisaniTimoviSkup1){
    const containerGrupa = document.querySelector(".container_all_of_Grup");

  // Uklonite prethodno prikazane podatke
    containerGrupa.innerHTML = "";

    grupisaniTimoviSkup1.forEach(grupa => {
        const div1 = document.createElement("div");
        div1.classList.add("containet_of_Grup");
        const div2 = document.createElement("div");
        div2.classList.add("container_tims_of_grup");
        const h2_button = document.createElement("button");
        h2_button.classList.add("name_of_grup_button");
        

        grupa.forEach(tim => {
            if (tim.parovi.includes("prvi par prvog kola")){
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);

            } else if(tim.parovi.includes("drugi par prvog kola")){

                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
            if (tim.parovi.includes("prvi par drugog kola")&&!tim.parovi.includes("prvi par prvog kola")&&!tim.parovi.includes("prvi par treceg kola")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");
    

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);

            } else if(tim.parovi.includes("drugi par drugog kola")) {
       
                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");
       

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
            if (tim.parovi.includes("prvi par treceg kola")&&!tim.parovi.includes("prvi par prvog kola")&&!tim.parovi.includes("prvi par drugog kola")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");
       

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);

            } else if(tim.parovi.includes("drugi par treceg kola")) {
       
                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;


                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi= document.createElement("div");
       

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText="Bod"
                ime_golovi.innerText="Gol"

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.bodovi
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.ukupni_golovi_kroz_kola
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi,p2)
                timgolovi.append(ime_golovi,p3)
                timDivP.append(timbodovi,timgolovi)

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
        });

        const grupaSlovo = grupa[0].grupa.split("", 1);
        h2_button.innerText = grupaSlovo + "grupa";

        div1.appendChild(h2_button );
        div1.appendChild(div2);

        // Dodajte div1 u containerGrupa
        containerGrupa.appendChild(div1);
    });
}
function prikaziParoveTimova(skupTimova, container) {
    console.log(skupTimova,"timovi")
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        // Create a div for the left-top section
        const TIMS = document.createElement("div");
        TIMS.classList.add("container_of_tims");

        // Prikazi prva dva tima u prvom redu


        // Create a div for each team
        for (let j = 0; j < grupa.length; j++) {
        const tim = grupa[j];

        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team");

        const img = document.createElement("img");
        img.id = "tim_grup_img_finale";
        img.src = tim.slika;

        const p = document.createElement("p");
        p.id = "tim_grup_slovo_finale";
        const prvoSlovo = tim.ime[0];
        const slova = tim.ime.slice(1, 3);
        p.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

        teamDiv.append(img, p);
        TIMS.appendChild(teamDiv);
    

        // Prikazi "vs" između prvog i drugog tima
            if (j === 0 && grupa.length > 1) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs1");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }

            // Dodaj "vs" između drugog i trećeg tima
            if (j === 1 && grupa.length > 2) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs2");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }
        }

        container.appendChild(TIMS);
        }
}
function prikaziParoveTimova1(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

    
        const TIMS = document.createElement("div");
        TIMS.classList.add("container_of_tims");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p = document.createElement("p");
            p.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
            const p3 = document.createElement("p");
            p3.id = "bodovi_kola-2_finale";
            if(tim.golovi_Round_16>=0){
                const goloviKola = tim.golovi_Round_16;
                p3.innerHTML = `${goloviKola}`;
                teamDiv.append(img, p,p3);
            }
            if(tim.golovi_Quarter_finale>=0){
                const goloviKola = tim.golovi_Quarter_finale;
                p3.innerHTML = `${goloviKola}`;
                teamDiv.append(img, p,p3);
            }
            if(tim.golovi_Semi_finale>=0){
                const goloviKola = tim.golovi_Semi_finale;
                p3.innerHTML = `${goloviKola}`;
                teamDiv.append(img, p,p3);
            }if(tim.golovi_finale>=0){
                const goloviKola = tim.golovi_finale;
                p3.innerHTML = `${goloviKola}`;
                teamDiv.append(img, p,p3);
            }if(tim.golovi_trece_mesto>=0){
                const goloviKola = tim.golovi_trece_mesto;
                p3.innerHTML = `${goloviKola}`;
                teamDiv.append(img, p,p3);
            }
            TIMS.appendChild(teamDiv);
    

    
            if (j === 0 && grupa.length > 1) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs1");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }

            if (j === 1 && grupa.length > 2) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs2");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }
        }

        container.appendChild(TIMS);
    }
}

function Sixth_final(grupa_of_16) {
    const container_osmina = document.querySelector(".container_all_of_Grup_osmina");
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);
}
function Sixth_final_points(grupa_of_16) {
    const container_osmina = document.querySelector(".container_all_of_Grup_osmina");
    container_osmina.innerHTML = "";
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);

}







function Quarter(grupa_of_16) {

   
    const container_osmina = document.querySelector(".container_all_of_Grup_cetvrt");
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);
}
function Quarter_stitches(grupa_of_16) {

    const container_osmina = document.querySelector(".container_all_of_Grup_cetvrt");
    container_osmina.innerHTML = "";
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);
}
function Semi_finals(grupa_of_16) {

    const container_osmina = document.querySelector(".container_all_of_Grup_polu");
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);

}
function Semi_finals_Points(grupa_of_16) {

    const container_osmina = document.querySelector(".container_all_of_Grup_polu");
    container_osmina.innerHTML = "";
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);
}


function Finale(grupa_of_16) {
    console.log(grupa_of_16,"finalise")


    const container_osmina = document.querySelector(".container_all_of_Grup_finale");
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);

}
function Finalebodovi(grupa_of_16) {

    const container_osmina = document.querySelector(".container_all_of_Grup_finale");
    container_osmina.innerHTML = "";
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims)

}
function trecemesto(grupa_of_16) {

   

    const container_osmina = document.querySelector(".container_all_of_Grup_za_trece1");
  
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);



}
function trecemestobodovi(grupa_of_16) {

   
   
    const container_osmina = document.querySelector(".container_all_of_Grup_za_trece1");
    container_osmina.innerHTML = "";
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);
    container_osmina.appendChild(all_tims);

}







function postaviEventSlusalce() {
    const divElements = document.querySelectorAll(".container_of_tim");

    divElements.forEach((div) => {
        div.addEventListener("click", function() {
            const slikaSrc = this.getAttribute("src");
            const ime = this.getAttribute("tim_grupe_slovo");
            const bodovi = this.getAttribute("tim_grupe_ball");
            // Sada možete koristiti podatke za prikaz u prozoru
            openPopup(slikaSrc, ime, bodovi);
        });
    });
}
function openPopup(slikaSrc, ime, bodovi) {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const slika = popup.querySelector("img");
    const h2 = popup.querySelector("h2");
    const bodoviSpan = popup.querySelector("#bodovi");

    slika.src = slikaSrc;
    h2.textContent = ime;
    bodoviSpan.textContent = bodovi;

    overlay.style.display = "block";
}

function uvecajSliku() {
    var slika = document.getElementById('slika');
    var trenutnaSirina = slika.offsetWidth;
      var novaSirina = trenutnaSirina + 100; // Možete prilagoditi željeno uvećanje

    slika.style.width = novaSirina + 'px';
}







