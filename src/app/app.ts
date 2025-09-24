import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  Renderer2,
  Inject,
  PLATFORM_ID,
  viewChild,
  ɵDeferBlockBehavior,
  QueryList,
  ViewChildren,
  ɵinternalProvideZoneChangeDetection
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SocketService } from './socket.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmptyError, filter, repeat, Subject, windowToggle } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
   constructor(
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private socket: SocketService,
    private elRef: ElementRef,
    private router: Router,
    private zone: NgZone,
    private http: HttpClient,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object  
  ) {}
useri='';
imgBase64:any;
emaili='';
us='';
passwordi='';
repasswordi='';
useremail='';
restemaili='';
userpass='';
kodi='';
listid='';
maxx='';
nami='';
sorr='';
currid='';
selectedValue='';
vals='';
imgs='';
tituli='';
subtituli='';
archv='';
timia='';
diff='';
text='';
imgos:any;
imgstype:any;
canSubmit=false;
fontsize='';
calli='';
colori='';
corod='';
tut='';
panchita='';
vali='';
savedRange: Range | null = null;
hui=false;
togg=false;
ifiqre=false;
srr=false;
svl='';
pp=0;
comm='';
id1='';
remvv=true;
id2='';
wasashleli='';
@ViewChild('register') register!: ElementRef<HTMLDivElement>
@ViewChild('signin') signin!: ElementRef<HTMLDivElement>
@ViewChild('checkcode') checkcode!: ElementRef<HTMLDivElement>
@ViewChild('restore') restore!: ElementRef<HTMLDivElement>
@ViewChild('Addid') Addid!: ElementRef<HTMLDivElement>
@ViewChild('List') List!: ElementRef<HTMLDivElement>
@ViewChild('passwordu') passwordu!: ElementRef<HTMLInputElement>
@ViewChild('passwordo') passwordo!: ElementRef<HTMLInputElement>
@ViewChild('passka') passka!: ElementRef<HTMLInputElement>
@ViewChild('indiv') indiv!: ElementRef<HTMLDivElement>
@ViewChild('idcrate') idcrate!: ElementRef<HTMLDivElement>
@ViewChild('saliste') saliste!: ElementRef<HTMLDivElement>
@ViewChild('recipts') recipts!: ElementRef<HTMLDivElement>
@ViewChild('timee') timee!: ElementRef<HTMLDivElement>
@ViewChild('font') font!: ElementRef<HTMLDivElement>
@ViewChild('sort') sort!: ElementRef<HTMLDivElement>
@ViewChild('deskrip') deskrip!: ElementRef<HTMLDivElement>
@ViewChild('addrecipt') addrecipt!: ElementRef<HTMLDivElement>
@ViewChild('description') description!: ElementRef<HTMLDivElement>
@ViewChild('tm') tm!: ElementRef<HTMLParagraphElement>
@ViewChild('validation1') validation1!: ElementRef<HTMLParagraphElement>
@ViewChild('validation2') validation2!: ElementRef<HTMLParagraphElement>
@ViewChild('validation3') validation3!: ElementRef<HTMLParagraphElement>
@ViewChild('validation4') validation4!: ElementRef<HTMLParagraphElement>
@ViewChild('validation5') validation5!: ElementRef<HTMLParagraphElement>
@ViewChild('validation6') validation6!: ElementRef<HTMLParagraphElement>
@ViewChild('validation7') validation7!: ElementRef<HTMLParagraphElement>
@ViewChild('validation8') validation8!: ElementRef<HTMLParagraphElement>
@ViewChild('validation9') validation9!: ElementRef<HTMLParagraphElement>
@ViewChild('validation10') validation10!: ElementRef<HTMLParagraphElement>
@ViewChild('validation11') validation11!: ElementRef<HTMLParagraphElement>
@ViewChild('validation12') validation12!: ElementRef<HTMLParagraphElement>
@ViewChild('validation13') validation13!: ElementRef<HTMLParagraphElement>
@ViewChild('validation15') validation15!: ElementRef<HTMLParagraphElement>
@ViewChild('validation16') validation16!: ElementRef<HTMLParagraphElement>
@ViewChild('validation17') validation17!: ElementRef<HTMLParagraphElement>
@ViewChild('validation18') validation18!: ElementRef<HTMLParagraphElement>
@ViewChild('validation25') validation25!: ElementRef<HTMLParagraphElement>
@ViewChild('validation26') validation26!: ElementRef<HTMLParagraphElement>
@ViewChild('validation27') validation27!: ElementRef<HTMLParagraphElement>
@ViewChild('validation29') validation29!: ElementRef<HTMLParagraphElement>
@ViewChild('nams') nams!: ElementRef<HTMLParagraphElement>
@ViewChild('nomss') nomss!: ElementRef<HTMLParagraphElement>
@ViewChild('button21') button21!: ElementRef<HTMLButtonElement>
@ViewChild('button19') button19 !: ElementRef<HTMLButtonElement>
@ViewChild('button17') button17 !: ElementRef<HTMLButtonElement>
@ViewChild('button16') button16 !: ElementRef<HTMLButtonElement>
@ViewChild('button26') button26!: ElementRef<HTMLButtonElement>
@ViewChild('button27') button27!: ElementRef<HTMLButtonElement>
@ViewChild('button28') button28!: ElementRef<HTMLButtonElement>
@ViewChild('button29') button29!: ElementRef<HTMLButtonElement>
@ViewChild('button38') button38!: ElementRef<HTMLButtonElement>
@ViewChild('button37') button37!: ElementRef<HTMLButtonElement>
@ViewChild('button39') button39!: ElementRef<HTMLButtonElement>
@ViewChild('button30') button30!: ElementRef<HTMLButtonElement>
@ViewChild('button31') button31!: ElementRef<HTMLButtonElement>
@ViewChild('button40') button40!: ElementRef<HTMLButtonElement>
@ViewChild('button55') button55!: ElementRef<HTMLButtonElement>
@ViewChild('button60') button60!: ElementRef<HTMLButtonElement>
@ViewChild('button61') button61!: ElementRef<HTMLButtonElement>
@ViewChild('button62') button62!: ElementRef<HTMLButtonElement>
@ViewChild('button63') button63!: ElementRef<HTMLButtonElement>
@ViewChild('button64') button64!: ElementRef<HTMLButtonElement>
@ViewChild('button708') button708!: ElementRef<HTMLButtonElement>
@ViewChild('bup') bup!: ElementRef<HTMLButtonElement>
@ViewChild('bap') bap!: ElementRef<HTMLButtonElement>
@ViewChild('imi') imi!: ElementRef<HTMLInputElement>
@ViewChild('sade') sade!: ElementRef<HTMLDivElement>
@ViewChild('iko') iko!: ElementRef<HTMLDivElement>
@ViewChild('sadeskripte') sadeskripte!: ElementRef<HTMLDivElement>
@ViewChild('saime') saime!: ElementRef<HTMLDivElement>
@ViewChild('ssm') ssm!: ElementRef<HTMLDivElement>
@ViewChild('imd') imd!: ElementRef<HTMLDivElement>
@ViewChild('yesno') yesno!: ElementRef<HTMLDivElement>
@ViewChild('delno') delno!: ElementRef<HTMLDivElement>
@ViewChild('suri') suri!: ElementRef<HTMLParagraphElement>
@ViewChild('want') want!: ElementRef<HTMLParagraphElement>
@ViewChild('mdis') mdis!: ElementRef<HTMLDivElement>
@ViewChild('T') T!: ElementRef<HTMLDivElement>
@ViewChildren('buttoni') buttoni!: QueryList<ElementRef<HTMLDivElement>>;
@ViewChild('trac') trac!: ElementRef<HTMLParagraphElement>
@ViewChild('M') M!: ElementRef<HTMLParagraphElement>
@ViewChild('mkj') mkj!: ElementRef<HTMLDivElement>
@ViewChild('sr') sr!: ElementRef<HTMLDivElement>
@ViewChild('ratee') ratee!: ElementRef<HTMLDivElement>
@ViewChild('satibe') satibe!: ElementRef<HTMLDivElement>
@ViewChild('pll') pll!: ElementRef<HTMLParagraphElement>
@ViewChild('dfop') dfop!:ElementRef<HTMLDivElement>
@ViewChild('stf') stf!:ElementRef<HTMLDivElement>
@ViewChild('favebi') favebi!:ElementRef<HTMLDivElement>
@ViewChild('safave') safave!:ElementRef<HTMLDivElement>
@ViewChild('miade') miade!:ElementRef<HTMLParagraphElement>
@ViewChild('saide') saide!:ElementRef<HTMLParagraphElement>
@ViewChild('tablee') tablee!:ElementRef<HTMLTableElement>
@ViewChild('usss') usss!:ElementRef<HTMLTableElement>
@ViewChild('saiue') saiue!:ElementRef<HTMLDivElement>
@ViewChild('sakoment') sakoment!:ElementRef<HTMLDivElement>
@ViewChild('edit') edit!:ElementRef<HTMLDivElement>
@ViewChild('saed') saed!:ElementRef<HTMLDivElement>
@ViewChild('yessn') yessn!:ElementRef<HTMLDivElement>

 ngOnInit(): void {
    console.log('✅ ngOnInit - component initialized');

  this.socket.onerror((err)=>{
    if(err==='utaken'){
      this.validation4.nativeElement.textContent="❌ Username is already taken!";
      this.validation4.nativeElement.style.color='red';
    }
     if(err==='etaken'){
      this.validation4.nativeElement.textContent='❌ Email is already taken!';
      this.validation4.nativeElement.style.color='red';
    }
     if(err==='eutaken'){
      this.validation4.nativeElement.textContent='❌ Username and email is taken!';
      this.validation4.nativeElement.style.color='red';
    }
    if(err==='added'){
   this.checkcode.nativeElement.style.display='block';
  this.register.nativeElement.style.pointerEvents='none';
  this.checkcode.nativeElement.style.pointerEvents='auto';
   const code = Math.floor(100000 + Math.random() * 900000);
       this.socket.adcodi(this.useri,this.emaili,Number(code));
    }
  });


this.socket.onsignin((vall,usero)=>{
    if(vall==='nousername'){
      this.validation5.nativeElement.textContent="* Wrong username!";
      setTimeout(() => {
        this.validation5.nativeElement.textContent='';

      }, 2500);
    }
    if(vall==='nopassword'){
      this.validation6.nativeElement.textContent='* Wrong user password!';
      setTimeout(() => {
      this.validation6.nativeElement.textContent='';
      }, 2500);
    }
    if(vall==='logged'){
      this.us=this.useremail;
      this.socket.load(this.us);
      setTimeout(() => {
        this.signin.nativeElement.style.display='none';
        this.List.nativeElement.style.display='flex';
      }, 500);  
    }
  });

   this.socket.oncheckiti((code)=>{
if(code==='wrong'){
  this.validation8.nativeElement.textContent='* Wrong code!';
  setTimeout(() => {
    this.validation8.nativeElement.textContent='';
  }, 2500);
}
else{
this.checkcode.nativeElement.style.display='none';
this.register.nativeElement.style.opacity='1';
this.validation4.nativeElement.textContent="✅ Registered successfully!"
this.validation4.nativeElement.style.color='green';
setTimeout(() => {
  this.validation4.nativeElement.textContent='';
  this.signin.nativeElement.style.display='flex';
this.register.nativeElement.style.display='none';
this.register.nativeElement.style.pointerEvents='auto'
}, 3000);
}
 });

   this.socket.oncheck((resp)=>{
    if(resp==='exists'){
      this.validation13.nativeElement.textContent='❌ this id already exists!';
      setTimeout(() => {
        this.validation13.nativeElement.textContent='';
      }, 2500);
    }
    if(resp==='addd'){
      this.validation13.nativeElement.textContent='✅ New Id added!';
      this.validation13.nativeElement.style.color='green';
      setTimeout(() => {
        this.validation13.nativeElement.style.color='red';
        this.validation13.nativeElement.textContent='';
        this.idcrate.nativeElement.style.display='none';
        this.List.nativeElement.style.display='flex'; 
      }, 2500);
    }
    this.socket.load(this.us);
  });

   this.socket.onAdded((respi)=>{
    if(respi==="addded"){
      this.validation9.nativeElement.textContent='✅ Successfully added!';
      this.validation9.nativeElement.style.color='green';
      this.socket.load(this.us);
      setTimeout(() => {
        this.Addid.nativeElement.style.display='none';
        this.List.nativeElement.style.display='flex';
        this.validation9.nativeElement.style.color='red';
        this.validation9.nativeElement.textContent='';
      }, 2500);
    }
    if(respi==='erri'){
      this.validation9.nativeElement.textContent='❌ Max amount of users reached for this Id!';
      setTimeout(() => {
        this.validation9.nativeElement.textContent='';
      }, 2500);
    }
    if(respi==='errii'){
      this.validation9.nativeElement.textContent='❌ Wrong Id!';
      setTimeout(() => {
        this.validation9.nativeElement.textContent='';
      }, 2500);
    }
    if(respi==='aro'){
      this.validation9.nativeElement.textContent='❌ Already registered!';
      setTimeout(() => {
        this.validation9.nativeElement.textContent='';
      }, 2500);
    }
  });


  this.socket.onload((recipts)=>{
    this.saliste.nativeElement.innerHTML='';
    if(recipts.length==0){
      this.saliste.nativeElement.textContent='No lists added!';
      this.saliste.nativeElement.style.display='flex';
      this.saliste.nativeElement.style.justifyContent='center';
      this.saliste.nativeElement.style.alignItems='center';
      this.saliste.nativeElement.style.color='#8a612b';
    }
    else{
      this.saliste.nativeElement.textContent='';
      this.saliste.nativeElement.style.display='';
      this.saliste.nativeElement.style.justifyContent='';
      this.saliste.nativeElement.style.alignItems='';
      this.saliste.nativeElement.style.color='';
    }
        recipts.forEach((element: { name: any; id:any; }) => {
          const divi : HTMLDivElement=document.createElement('div');
          divi.textContent=element.name;
          this.renderer.addClass(divi,'listebi');
          divi.addEventListener('click',()=>{
             const id=element.id;
             this.currid=element.id;
             if(!this.remvv){
              this.socket.washale(id,this.us);
             }
             else{
             this.socket.Recipts(id);
             this.socket.getfavs(id,this.us);
             this.socket.lusers(id,this.us);
             this.ifiqre=true;
             this.miade.nativeElement.textContent=id;
             }
          });
          this.saliste.nativeElement.appendChild(divi);
    });
  });

  this.socket.onRecipt((recipt)=>{
      this.socket.getfavs(this.currid,this.us);
    this.recipts.nativeElement.innerHTML='';
    let mapi: Map<any, number> = new Map();         
   recipt.slice().reverse().forEach((element: { id:string; idd:any; img:any,imgtype:any,title:string, subtitle:string,time:number,hour:string,rate:number,level:string,amount:number,user:string}) => {
    const divi : HTMLDivElement = document.createElement('div');
    const forim : HTMLDivElement = document.createElement('div');
    const img : HTMLDivElement = document.createElement('div');
    const tituli : HTMLHeadingElement = document.createElement('h3');
    const deskr : HTMLParagraphElement = document.createElement('p');
    const meta : HTMLDivElement = document.createElement('div');
    const buu : HTMLDivElement = document.createElement('div');
    const span1 : HTMLSpanElement = document.createElement('span');
    const span2 : HTMLSpanElement = document.createElement('span');
    const span3 : HTMLSpanElement = document.createElement('span');

    this.renderer.addClass(divi,'haia');
    this.renderer.addClass(forim,'forim');
    this.renderer.addClass(img,'imgi');
    this.renderer.addClass(tituli,'title');
    this.renderer.addClass(deskr,'deskr');
    this.renderer.addClass(meta,'meta');
    this.renderer.addClass(buu,'buu');

    span1.textContent=`⏱ ${element.time}`+element.hour[0].toLowerCase();
    span2.textContent=`⭐ ${element.rate}`;
    span3.textContent=`🍴 ${element.level}`;

    tituli.textContent=element.title;
    deskr.textContent=element.subtitle;

    buu.appendChild(span1);
    buu.appendChild(span2);
    buu.appendChild(span3);

    meta.appendChild(buu);

img.style.backgroundImage = `url(${element.img})`;

    forim.appendChild(img);

    divi.appendChild(forim);
    divi.appendChild(tituli);
    divi.appendChild(deskr);
    divi.appendChild(meta);

    divi.addEventListener('click',()=>{
      const io = element.idd;
      this.tut=element.title;
      this.socket.chei(io,this.us);
      this.socket.daakome(io,this.us);
      setTimeout(() => {
      this.recipts.nativeElement.style.display='none';
      this.sadeskripte.nativeElement.style.display='flex';
      this.sort.nativeElement.style.display='none';
        this.saime.nativeElement.innerHTML='';
  this.nams.nativeElement.innerHTML='';
  this.nomss.nativeElement.innerHTML='';
  this.saime.nativeElement.innerHTML='';
  this.ssm.nativeElement.innerHTML='';
  this.sade.nativeElement.innerHTML=''; 
}, 150);
    });

    this.recipts.nativeElement.appendChild(divi);

    });
if(this.ifiqre){
this.List.nativeElement.style.display='none';
this.recipts.nativeElement.style.display='flex';
this.sort.nativeElement.style.display='flex';
}
this.ifiqre=false;

  });

 this.socket.onlusers((ttl)=>{
     const tbody = this.usss.nativeElement.tBodies[0];
     tbody.innerHTML='';
   ttl.slice().reverse().forEach((element: {user:string,total:string}) => {

      const trr : HTMLTableRowElement = document.createElement('tr');
      const th1 : HTMLTableCellElement = document.createElement('td');
      const th2 : HTMLTableCellElement = document.createElement('td');

      th1.textContent=element.user;
      th2.textContent=String(element.total);

      trr.appendChild(th1);
      trr.appendChild(th2);

      tbody.appendChild(trr);
   });
  });

  this.socket.ongetfavs((favs)=>{
    this.favebi.nativeElement.innerHTML='';
    if(favs.length==0){
      
    }
    else{ 
         let mapi: Map<any, number[]> = new Map();
         favs.slice().reverse().forEach((element: { id:string; idd:any; title:string,time:number,hour:string,rate:number,level:string, user:string}) => {
         
          if(!mapi.has(element.user)){
          mapi.set(element.user, [0, 0]);
          }
          mapi.get(element.user)![0] += 1;
          mapi.get(element.user)![1] += element.rate;
          
          const divi : HTMLDivElement = document.createElement('div');

          const div1 : HTMLDivElement = document.createElement('div');
          const div2 : HTMLDivElement = document.createElement('div');
          const div3 : HTMLDivElement = document.createElement('div');

          this.renderer.addClass(div1,'iopm');
          this.renderer.addClass(div1,'inn');
          this.renderer.addClass(div2,'iopm');
          this.renderer.addClass(div2,'imm');
          this.renderer.addClass(div3,'iopm');
          this.renderer.addClass(div3,'yu');

          const span1 : HTMLSpanElement = document.createElement('span');
          const span2 : HTMLSpanElement = document.createElement('span');
          const span3 : HTMLSpanElement = document.createElement('span');

          this.renderer.addClass(divi,'favebi');
          this.renderer.addClass(span1,'i');
          this.renderer.addClass(span2,'i');
          this.renderer.addClass(span3,'i');

          span1.textContent=`⏱ ${element.time}`+element.hour[0].toLowerCase();
          span2.textContent=`⭐ ${element.rate}`;
          span3.textContent=`🍴 ${element.level}`;

          div1.textContent=element.title;

          div2.appendChild(span1);
          div2.appendChild(span2);
          div2.appendChild(span3);

          div3.textContent=element.user;

          divi.appendChild(div1);
          divi.appendChild(div2);
          divi.appendChild(div3);

          divi.addEventListener('click',()=>{
            const io = element.idd;
            this.socket.getdesk(io);
            this.socket.daakome(io,this.us);
            setTimeout(() => {
              this.recipts.nativeElement.style.display='none';
              this.sort.nativeElement.style.display='none';
              this.sadeskripte.nativeElement.style.display='flex';
              this.safave.nativeElement.style.display='none';
              this.sort.nativeElement.style.backgroundColor='#F7E0B7';
              this.recipts.nativeElement.style.opacity='1';
              this.recipts.nativeElement.style.pointerEvents='auto';
              this.sort.nativeElement.style.pointerEvents='auto';
              this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
              this.button61.nativeElement.style.backgroundColor='transparent';
              this.button61.nativeElement.style.color='#8a612b';
              this.srr=false;
              this.socket.chei(io,this.us);
            }, 1000);
                    this.saime.nativeElement.innerHTML='';
  this.nams.nativeElement.innerHTML='';
  this.nomss.nativeElement.innerHTML='';
  this.saime.nativeElement.innerHTML='';
  this.ssm.nativeElement.innerHTML='';
  this.sade.nativeElement.innerHTML='';
          });

          this.favebi.nativeElement.appendChild(divi);

    });
    const tbody = this.tablee.nativeElement.tBodies[0];
    tbody.innerHTML = ''; 

    for (const [key, [value,value1]] of mapi) {

      const trr : HTMLTableRowElement = document.createElement('tr');
      const th1 : HTMLTableCellElement = document.createElement('th');
      const th2 : HTMLTableCellElement = document.createElement('th');
      const th3 : HTMLTableCellElement = document.createElement('th');

      th1.textContent=key;
      th2.textContent=String(value);
      th3.textContent=String(value1);

      trr.appendChild(th1);
      trr.appendChild(th2);
      trr.appendChild(th3);

      tbody.appendChild(trr);
}
    }
  });

this.socket.onchei((inf,id,user)=>{
  if(inf==='no'){
  this.imd.nativeElement.style.height='16px';
this.imd.nativeElement.style.width='16px';
this.imd.nativeElement.style.marginTop='1.5px';
this.button38.nativeElement.style.color='brown';
this.button38.nativeElement.style.backgroundColor='#ffd58d';
this.imd.nativeElement.style.backgroundImage = 'url("/assets/images/favorite.png")';
this.renderer.removeClass(this.imd.nativeElement,'kol');
this.socket.getfavs(this.currid,this.us);
}
  else{
 this.imd.nativeElement.style.backgroundImage = 'url("/assets/images/approved.png")';
this.imd.nativeElement.style.height='17px';
this.imd.nativeElement.style.width='17px';
this.button38.nativeElement.style.color='white';
this.button38.nativeElement.style.backgroundColor='brown';
  }
  this.socket.getdesk(id);
  this.socket.getfavs(this.currid,this.us);
});


this.socket.ongetdesk((html,info)=>{
  
  this.corod=info.idd;

  this.saime.nativeElement.innerHTML='';
  this.nams.nativeElement.innerHTML='';
  this.nomss.nativeElement.innerHTML='';
  this.saime.nativeElement.innerHTML='';
  this.ssm.nativeElement.innerHTML='';
  this.sade.nativeElement.innerHTML='';

const div : HTMLDivElement = document.createElement('div');
const divi : HTMLDivElement = document.createElement('div');
   const span1 : HTMLSpanElement = document.createElement('span');
   const span2 : HTMLSpanElement = document.createElement('span');
   const span3 : HTMLSpanElement = document.createElement('span');
   const titl : HTMLParagraphElement = document.createElement('p');
   const subtitl : HTMLParagraphElement = document.createElement('p');
   const meta : HTMLDivElement = document.createElement('div');
   const buu : HTMLDivElement = document.createElement('div');
   const img : HTMLDivElement = document.createElement('div');

     this.renderer.addClass(meta,'meta');
    this.renderer.addClass(buu,'buu');
    this.renderer.addClass(titl,'nams');
    this.renderer.addClass(subtitl,'nomss');
    this.renderer.addClass(img,'imgis');

    titl.textContent=info.title;
    subtitl.textContent=info.subtitle;
  
    span1.textContent=`⏱ ${info.time}`+info.hour[0].toLowerCase();
    span2.textContent=`⭐ ${info.rate}`;
    span3.textContent=`🍴 ${info.level}`;

    buu.style.fontSize = 'clamp(12px, 3.5vw, 17px)';

    buu.appendChild(span1);
    buu.appendChild(span2);
    buu.appendChild(span3);

    meta.appendChild(buu);

img.style.backgroundImage = `url(${info.img})`;

    this.saime.nativeElement.appendChild(img);
    this.nams.nativeElement.appendChild(titl);
    this.nomss.nativeElement.appendChild(subtitl);
    this.ssm.nativeElement.appendChild(meta);

div.innerHTML=html;

this.renderer.addClass(div,'lkk');

this.sade.nativeElement.appendChild(div);
console.log(html);
console.log(divi);


});

this.socket.onaddred((inf)=>{
if(inf==='del'){
  this.imd.nativeElement.style.height='16px';
this.imd.nativeElement.style.width='16px';
this.button38.nativeElement.style.color='brown';
this.imd.nativeElement.style.marginTop='1.5px';
this.imd.nativeElement.style.marginLeft='1.5px';
this.button38.nativeElement.style.backgroundColor='#ffd58d';
this.imd.nativeElement.style.backgroundImage = 'url("/assets/images/favorite.png")';
this.renderer.removeClass(this.imd.nativeElement,'kol');
}
else if(inf==='add'){
 this.imd.nativeElement.style.backgroundImage = 'url("/assets/images/approved.png")';
this.imd.nativeElement.style.height='17px';
this.imd.nativeElement.style.width='17px';
this.button38.nativeElement.style.color='white';
this.button38.nativeElement.style.backgroundColor='brown';
this.renderer.addClass(this.imd.nativeElement,'kol');
this.socket.getfavs(this.currid,this.us);
}
});
this.socket.onremv((id,user)=>{
  if(id==='none'){
    this.suri.nativeElement.textContent=`Owner of this post is ${user}`;
    this.delno.nativeElement.style.display='block';
    this.yesno.nativeElement.style.display='none';
    this.delno.nativeElement.style.pointerEvents='auto';
    this.panchita=user;
  }
  else{
    this.socket.daaremv(this.corod,this.us);
this.sr.nativeElement.style.display='none';
this.satibe.nativeElement.style.display='none';
this.validation25.nativeElement.textContent=`✅ Successfully deleted recipe ${this.tut}`;
this.validation25.nativeElement.style.color='green';
this.bup.nativeElement.style.display='none';
this.socket.getfavs(this.currid,this.us);
this.ifiqre=true;
setTimeout(() => {
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
  this.validation25.nativeElement.textContent='';
  this.sadeskripte.nativeElement.style.display='none';
  this.sort.nativeElement.style.display='flex';
  this.recipts.nativeElement.style.display='flex';
  this.yesno.nativeElement.style.display='none';
  this.sr.nativeElement.style.display='flex';
this.satibe.nativeElement.style.display='flex';
this.bup.nativeElement.style.display='flex'
  this.socket.Recipts(this.currid);

}, 2500);
  }
});

this.socket.oncui((inf)=>{
if(inf==='yes'){
this.mdis.nativeElement.style.backgroundImage='url("/assets/images/approved.png")';
this.mdis.nativeElement.style.height='17px';
this.mdis.nativeElement.style.width='17px';
this.button40.nativeElement.style.color='white';
this.button40.nativeElement.style.backgroundColor='brown';
this.hui=false;
this.socket.getfavs(this.currid,this.us);
}
else{
this.hui=true;
this.mdis.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
this.mdis.nativeElement.style.height='13.5px';
this.mdis.nativeElement.style.width='13.5px';
this.button40.nativeElement.style.color='brown';
this.button40.nativeElement.style.backgroundColor='#ffd58d';
this.socket.getfavs(this.currid,this.us);
}
});

this.socket.onvali((id)=>{
  this.ifiqre=false;
  if(id==this.corod &&
    this.recipts.nativeElement.style.display==='flex'
    && this.sort.nativeElement.style.display==='flex'){
    this.ifiqre=true;
  }
  this.socket.Recipts(this.currid);
})

this.socket.onaem((obj)=>{
  obj.forEach((element:{email:string,user:string,titl:string})=>{
 this.http.post("https://beckend2.onrender.com/send-email", {
  to:element.email,
  subject:'New recipe',
  text:`Dear ${element.user},
  
  User ${this.us} added new recipe named - ${element.titl}!
  `
  }).subscribe(res => {
    console.log(res);
  });
  });
});

this.socket.onsnde((email,user,useri,title,id)=>{
this.http.post("https://beckend2.onrender.com/send-emaili", {
  to: email,
  subject:'Delete permission',
  text:id,
  html: `
   <div style="
    font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
    padding: 25px 30px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    background-color: #f9f9f9;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
">
    <h2 style="
        color: #333;
        margin-bottom: 15px;
        font-size: 22px;
    ">
        Dear ${user},
    </h2>

    <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        User <strong>${useri}</strong> asked you to delete a recipe named 
        <strong>${title}</strong>.
    </p>

    <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
        Do you want to delete the recipe <strong>${title}</strong>?
    </p>

    <!-- Buttons go here -->
    <div style="display: flex; gap: 15px;">
        <!-- ✅ Yes and ❌ No buttons inserted here -->
    </div>
<a href="https://beckend2.onrender.com/confirm?email=${encodeURIComponent(email)}&response=yes&tituli=${encodeURIComponent(title)}&user=${encodeURIComponent(user)}&useri=${encodeURIComponent(useri)}&idd=${encodeURIComponent(this.corod)}"
   style="
       display: inline-block;
       padding: 14px 30px;
       background: linear-gradient(135deg, #28a745, #218838);
       color: white;
       text-decoration: none;
       border-radius: 12px;
       font-weight: bold;
       font-family: 'Segoe UI', Tahoma, sans-serif;
       box-shadow: 0 6px 12px rgba(0,0,0,0.2);
       transition: all 0.2s ease;
       user-select: none;
       touch-action: manipulation;
   "
   onmouseover="this.style.background='linear-gradient(135deg, #218838, #1e7e34)'; this.style.transform='translateY(-2px) scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.25)';"
   onmouseout="this.style.background='linear-gradient(135deg, #28a745, #218838)'; this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)';"
   ontouchstart="this.style.background='linear-gradient(135deg, #218838, #1e7e34)'; this.style.transform='translateY(-2px) scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.25)';"
   ontouchend="this.style.background='linear-gradient(135deg, #28a745, #218838)'; this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)';"
>
   ✅ Yes
</a>

<a href="https://beckend2.onrender.com/confirm?email=${encodeURIComponent(email)}&response=no&tituli=${encodeURIComponent(title)}&user=${encodeURIComponent(user)}&useri=${encodeURIComponent(useri)}&idd=${encodeURIComponent(this.corod)}"
   style="
       display: inline-block;
       padding: 14px 30px;
       background: linear-gradient(135deg, #dc3545, #c82333);
       color: white;
       text-decoration: none;
       border-radius: 12px;
       font-weight: bold;
       font-family: 'Segoe UI', Tahoma, sans-serif;
       margin-left: 20px;
       box-shadow: 0 6px 12px rgba(0,0,0,0.2);
       transition: all 0.2s ease;
       user-select: none;
       touch-action: manipulation;
   "
   onmouseover="this.style.background='linear-gradient(135deg, #c82333, #bd2130)'; this.style.transform='translateY(-2px) scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.25)';"
   onmouseout="this.style.background='linear-gradient(135deg, #dc3545, #c82333)'; this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)';"
   ontouchstart="this.style.background='linear-gradient(135deg, #c82333, #bd2130)'; this.style.transform='translateY(-2px) scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.25)';"
   ontouchend="this.style.background='linear-gradient(135deg, #dc3545, #c82333)'; this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.2)';"
>
   ❌ No
</a>

    </div>
    </div>
  `
}).subscribe(res => {
    console.log(res);
  });
});

this.socket.ondaaremv((inf,objs,user,useri,title)=>{
  if(inf==='yes'){
  objs.forEach((element:{email:string, useri:string})=>{
    if(element.useri===useri){
       this.http.post("https://beckend2.onrender.com/send-email", {
      to: element.email,
      Subject:'Deleted recipe',
      text: `Dear ${element.useri}
      
      User ${user} agreed to delete recipe named ${title}!
      
      `
}).subscribe(res=>{
  console.log(res);
});
    }
    else{
    this.http.post("https://beckend2.onrender.com/send-email", {
      to: element.email,
      subject:'Deleted recipe',
      text: `Dear ${element.useri}
      
      User ${user} deleted recipe ${title}!
      
      `
}).subscribe(res=>{
  console.log(res);
});
  }
  });
  }
  else{
  objs.forEach((element:{email:string, useri:string})=>{
    this.http.post("https://beckend2.onrender.com/send-email", {
      to: element.email,
      Subject:'Deleted recipe',
      text: `Dear ${element.useri}
      
      User ${this.us} deleted recipe ${inf}!
      
      `
}).subscribe(res=>{
  console.log(res);
});
  });
  }
});

  this.socket.onadcodi((email,name,code)=>{
  this.http.post("https://beckend2.onrender.com/send-email", {
  to: email,
  subject: "Loan Alert",
  text: `Dear ${this.useri},

  Here is your on time code - ${code}
  `
}).subscribe(res => {
  console.log(res);
});
});

this.socket.ondaaemail((email,name,code)=>{
  this.http.post("https://beckend2.onrender.com/send-email", {
  to: email,
  subject: "Loan Alert",
  text: `Dear ${this.useri},

  Here is your new on time code - ${code}
  `
}).subscribe(res => {
  console.log(res);
});
});

 this.socket.oncheemail((res)=>{
if(res==='wrong'){
this.validation7.nativeElement.textContent='* Email is not registered or valid!';
setTimeout(() => {
  this.validation7.nativeElement.textContent='';
}, 2500);
}
if(res==='done'){
  this.validation7.nativeElement.textContent='* Password was sent to this email!';
  this.validation7.nativeElement.style.color='green';
  setTimeout(() => {
    this.validation7.nativeElement.textContent='';
    this.validation7.nativeElement.style.color='red';
    this.restore.nativeElement.style.display='none';
    this.signin.nativeElement.style.pointerEvents='auto';
  }, 2500);
}
 });

this.socket.sendee((email,user,pass)=>{
 this.http.post('https://beckend2.onrender.com/send-email',{
    to:email,
    subject: 'Your password',
    text:`Dear ${user},
    
    Your password is - ${pass}!
    `
  }).subscribe(res => {
    console.log(res);
  });
});

this.socket.oncomenti((comms)=>{
  this.sakoment.nativeElement.innerHTML='';
  comms.slice().reverse().forEach((element: { id:string,user:string,comment:string,date:string,idd:string }) => {

  const p : HTMLParagraphElement = document.createElement('p');
  const ps : HTMLParagraphElement = document.createElement('p');
  const pi : HTMLParagraphElement = document.createElement('p');
  const span1 : HTMLSpanElement = document.createElement('span');
  const span2 : HTMLSpanElement = document.createElement('span');
  const div : HTMLDivElement = document.createElement('div');
  const divi : HTMLDivElement = document.createElement('div');
  const butt : HTMLDivElement = document.createElement('div');
  const butt1 : HTMLButtonElement = document.createElement('button');
  const butt2 : HTMLButtonElement = document.createElement('button');

  butt1.style.backgroundImage='url("../assets/images/trash-can.png")';
  butt2.style.backgroundImage='url("../assets/images/edit-text.png")';

  this.renderer.addClass(butt1,'buyy');
  this.renderer.addClass(butt2,'buyy');

  this.renderer.addClass(butt,'ooll');

  span1.textContent=element.user+': ';
  span1.style.color='blue';
  span2.textContent=element.comment;
  span1.style.margin='0';
  span1.style.padding='0';
  span2.style.margin='0';
  span2.style.padding='0';
  this.renderer.addClass(span1,'klas1');
  this.renderer.addClass(span2,'klas1');

  butt2.addEventListener('click',()=>{
    const aid = element.idd;
    const iid = element.id;
    this.socket.editcomm(iid,aid);
  });

  butt1.addEventListener('click',()=>{
    const aid = element.idd;
    const iid = element.id;
    const oo : HTMLDivElement = document.createElement('div');
    const bu11 : HTMLButtonElement = document.createElement('button');
    const bu22 : HTMLButtonElement = document.createElement('button');
    this.renderer.addClass(oo,'satibeo');
    this.renderer.addClass(bu11,'bu1');
    this.renderer.addClass(bu22,'bu1');
    bu11.style.backgroundImage='url("../assets/images/check.png")';
    bu22.style.backgroundImage='url("../assets/images/delete.png")';
    bu22.style.marginLeft='2.1px';
    bu11.style.marginLeft='1px';

    bu11.addEventListener('click',()=>{
    this.socket.comdel(iid,aid);
    butt.removeChild(bu11);
    butt.removeChild(bu22);
    butt.appendChild(butt1);
    butt.appendChild(butt2);
    });

    bu22.addEventListener('click',()=>{
    butt.removeChild(bu11);
    butt.removeChild(bu22);
    butt.appendChild(butt1);
    butt.appendChild(butt2);
    });
    butt.removeChild(butt1);
    butt.removeChild(butt2);
    butt.appendChild(bu11);
    butt.appendChild(bu22);
  });


  if(element.user===this.us){
  ps.style.float='right';
  div.style.float='right';
  p.style.marginRight='2px';
  p.style.display='flex';
  span2.style.alignSelf='flex-end';
  span2.style.marginLeft='auto';
  div.style.backgroundColor='#e6b87791';
  p.appendChild(span2);
  pi.style.textAlign='end';
  butt.style.left='2%';
  butt.style.bottom='2%';
  butt.style.marginBottom='2px';
  butt2.style.marginLeft='4px';
  butt1.style.marginLeft='3px';
  butt.appendChild(butt1);
  butt.appendChild(butt2);
  if ("vibrate" in navigator) {
    console.log("Device can vibrate!");
    navigator.vibrate(200);
} else {
    console.log("Device cannot vibrate.");
}
  }
  else{
  p.style.marginLeft='2px';
  span2.style.marginRight='2px';
  p.appendChild(span1),
  p.appendChild(span2);
  div.style.backgroundColor='#e6b877';
  }
  pi.textContent=element.date;
  p.style.margin='0';
    p.style.padding='0';
    p.style.padding='4px';
    this.renderer.addClass(ps,'plp');
    pi.style.marginTop='2px';
    this.renderer.addClass(pi,'klas2');
    ps.style.padding='4px';
    ps.appendChild(p);
    ps.appendChild(pi);
  div.appendChild(ps);
  div.style.width='60%';
  divi.style.width='100%';
  div.style.margin='0';
  div.style.padding='0';
  div.style.marginTop='5px';
  div.style.borderRadius='12px';
  this.renderer.addClass(div,'ppoo');
  div.appendChild(butt);
  divi.appendChild(div);
  this.sakoment.nativeElement.appendChild(divi);
  });
});

this.socket.oneditcomm((id,idd,comment)=>{
  this.edit.nativeElement.style.display='flex';
this.saed.nativeElement.textContent=comment;
this.id1=id;
this.id2=idd;
});

this.socket.onwashale((id,user,title)=>{
this.yessn.nativeElement.style.display='flex';
this.M.nativeElement.textContent=`Delete list ${title}?`;
this.wasashleli=id;
});
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  arwsh(){
    this.yessn.nativeElement.style.display='none';
  }

  wsh(){
    this.socket.washala(this.wasashleli,this.us);
    setTimeout(() => {
      this.yessn.nativeElement.style.display='none';
    }, 500);
  }

  butto(){
    if(!this.remvv){
      this.button17.nativeElement.textContent='❌ Remove list';
      this.renderer.removeClass(this.button17.nativeElement,'kbko');
      this.renderer.addClass(this.button17.nativeElement,'kbk');
      this.List.nativeElement.style.cursor='default';
    const haia=document.getElementsByClassName('listebi');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor= 'pointer';
}
this.remvv=true;
this.button16.nativeElement.style.pointerEvents='auto';
this.button16.nativeElement.style.opacity='1';
    }
    else{
      this.button16.nativeElement.style.pointerEvents='none';
      this.button16.nativeElement.style.opacity='0.7';
      this.button17.nativeElement.textContent='✅ Done';
      this.renderer.removeClass(this.button17.nativeElement,'kbk');
      this.renderer.addClass(this.button17.nativeElement,'kbko');
      this.List.nativeElement.style.cursor='url("assets/images/icons8-x-18.png") 0 0, auto';
          const haia=document.getElementsByClassName('listebi');
for (let i = 0; i < haia.length; i++) {
  const el = haia[i] as HTMLElement;
  el.style.cursor= 'url("assets/images/icons8-x-18.png") 0 0, auto';
  }
  this.remvv=false;
    }
  }

  conf(){
this.socket.editch(this.id1,this.id2,this.saed.nativeElement.textContent!);
this.edit.nativeElement.style.display='none';
  }
   
  olkk(){
    this.edit.nativeElement.style.display='none';
  }

  dio(){
    this.socket.addrem(this.currid,this.corod,this.us);
    this.socket.getfavs(this.currid,this.us);
  }
  cuii(){
this.togg=false;
if(this.button40.nativeElement.style.backgroundColor!=='brown'){
this.ratee.nativeElement.style.display='block';
this.sadeskripte.nativeElement.style.backgroundColor='rgba(0, 0, 0, 0.2)';
this.sade.nativeElement.style.backgroundColor='rgba(0, 0, 0, 0.2)';
this.iko.nativeElement.style.pointerEvents='none';
this.ratee.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='0.6';
this.button38.nativeElement.style.opacity='0.6';
this.button39.nativeElement.style.opacity='0.6';
this.button40.nativeElement.style.opacity='0.6';
}
else{
  const div : HTMLDivElement = document.createElement('div');
  this.renderer.addClass(div,'daavalide');
  div.textContent='You have already rated!';
  document.body.appendChild(div);
  setTimeout(() => {
    document.body.removeChild(div);
  }, 3950);
}
  }
  clrt(){
    this.ratee.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.ratee.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
  }
darete(){
  if(this.hui){
    this.mdis.nativeElement.style.backgroundImage='url("/assets/images/approved.png")';
this.mdis.nativeElement.style.height='17px';
this.mdis.nativeElement.style.width='17px';
this.button40.nativeElement.style.color='white';
this.button40.nativeElement.style.backgroundColor='brown';
this.renderer.addClass(this.mdis.nativeElement,'kol');
    this.socket.addrt(this.corod,Number(this.vali),this.us);
  }
  this.trac.nativeElement.style.display='none';
  this.mkj.nativeElement.style.display='none';
  this.button55.nativeElement.style.display='none';
  this.validation29.nativeElement.style.display='flex';
  this.bap.nativeElement.style.display='none';
  setTimeout(() => {
  this.trac.nativeElement.style.display='flex';
  this.mkj.nativeElement.style.display='flex';
  this.button55.nativeElement.style.display='flex';
  this.validation29.nativeElement.style.display='none';
  this.ratee.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.ratee.nativeElement.style.pointerEvents='auto';
this.bap.nativeElement.style.display='flex';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
this.socket.Recipts(this.currid);
this.socket.getdesk(this.corod);
this.socket.getfavs(this.currid,this.us);
  }, 2500);
}

  onHover(event: MouseEvent) {
  const target= event.target as HTMLElement;
    const boxesArray = this.buttoni.toArray(); 
  if(target.textContent==='1'){
        if(!this.togg){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
        }
    this.renderer.addClass(target,'dee');
  }
  if(target.textContent==='2'){
        if(!this.togg){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
        }
    this.renderer.addClass(target,'dee');
  }
  if(target.textContent==='3'){
        if(!this.togg){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
        }  
     this.renderer.addClass(target,'dee');
  }
  if(target.textContent==='4'){
        if(!this.togg){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
        }   
    this.renderer.addClass(target,'dee');
  }
  if(target.textContent==='5'){
        if(!this.togg){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
        }    
        this.renderer.addClass(target,'dee');

  }

}
onLeave(event: MouseEvent) {
  
  const target = event.target as HTMLElement;
  this.renderer.removeClass(target,'dee');
  if(!this.togg){
this.buttoni.forEach((box)=>{
box.nativeElement.style.backgroundImage= 'url("/assets/images/star (2).png")';
});
  }
}
onToggle(event: MouseEvent) {
    const target= event.target as HTMLElement;
    const boxesArray = this.buttoni.toArray(); 
  if(target.textContent==='1'){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
     boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[4].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    this.vali=target.textContent;
  }
  if(target.textContent==='2'){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[4].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    this.vali=target.textContent;
  }
  if(target.textContent==='3'){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    boxesArray[4].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    this.vali=target.textContent;
  }
  if(target.textContent==='4'){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[4].nativeElement.style.backgroundImage='url("/assets/images/star (2).png")';
    this.vali=target.textContent;
  }
  if(target.textContent==='5'){
    target.style.backgroundImage= 'url("/assets/images/star (1).png")';
    target.style.color='transparent';
    boxesArray[0].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[1].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[2].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    boxesArray[3].nativeElement.style.backgroundImage='url("/assets/images/star (1).png")';
    this.vali=target.textContent;
  }
  this.togg=true;
}
ydel(){
this.socket.remv(this.corod,this.us);
}
ndel(){
this.yesno.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
}
ydell(){
this.validation26.nativeElement.style.display='flex';
this.validation26.nativeElement.textContent=` Email was sent to user ${this.panchita}`;
this.suri.nativeElement.style.display='none';
this.want.nativeElement.style.display='none';
this.T.nativeElement.style.display='none';
this.socket.snde(this.panchita,this.us,this.tut);
setTimeout(() => {
  this.validation26.nativeElement.textContent='';
  this.validation26.nativeElement.style.display='none';
  this.suri.nativeElement.style.display='flex';
this.want.nativeElement.style.display='flex';
this.T.nativeElement.style.display='flex';
  this.delno.nativeElement.style.display='none';
  this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
}, 2500);
}
ndell(){
this.delno.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
}
clrtss(){
  this.delno.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
}
registeri(){
let a=0;
if(this.useri===''){
  a++;
  this.validation1.nativeElement.textContent='* Empty username field!';
  setTimeout(() => {
    this.validation1.nativeElement.textContent='';
  }, 2500);
}

if(this.emaili===''){
  a++;
  this.validation2.nativeElement.textContent='* Empty email field!';
  setTimeout(() => {
    this.validation2.nativeElement.textContent='';
  }, 2500);
}  else if(!this.isValidEmail(this.emaili)){
  a++;
  this.validation2.nativeElement.textContent='* Wrong email format!';
  setTimeout(() => {
    this.validation2.nativeElement.textContent=''
  }, 2500);
}

if(this.passwordi===''){
  a++;
  this.validation3.nativeElement.textContent='* Empty password field!';
  setTimeout(() => {
    this.validation3.nativeElement.textContent='';
  }, 2500);
} else if(this.passwordi.length<8){
  a++;
  this.validation3.nativeElement.textContent='* Password must be at least 8 characters!';
  setTimeout(() => {
    this.validation3.nativeElement.textContent='';
  }, 2500);
}

if(this.repasswordi===''){
  a++;
  this.validation4.nativeElement.textContent='* Empty repeat password field!';
  setTimeout(() => {
    this.validation4.nativeElement.textContent='';
  }, 2500);
} else if(this.repasswordi!==this.passwordi){
a++;
this.validation4.nativeElement.textContent='* Passwords do not match!';
setTimeout(() => {
  this.validation4.nativeElement.textContent='';
}, 2500);
}

if(a==0){
    this.socket.register(this.useri,this.emaili,this.passwordi);
  a=0;
}
else{
  a=0;
}
}

signinn(){
  let a=0;
if(this.useremail===''){
  a++;
  this.validation5.nativeElement.textContent='* Empty user field!'
  setTimeout(() => {
    this.validation5.nativeElement.textContent='';
  }, 2500);
}
if(this.userpass===''){
  a++;
  this.validation6.nativeElement.textContent='* Empty password field!';
  setTimeout(() => {
    this.validation6.nativeElement.textContent='';
  }, 2500);
} 
if(a==0){
  this.socket.signin(this.useremail,this.userpass);
  a=0;
}
else{
  a=0;
}
}

daareste(){
  if(this.restemaili===''){
    this.validation7.nativeElement.textContent='* Empty email field!';
    setTimeout(() => {
      this.validation7.nativeElement.textContent='';
    }, 2500);
  }
  else{
   const code = Math.floor(100000 + Math.random() * 900000);
  this.socket.cheemail(this.restemaili);
  }
}

sendag(){
  const code = Math.floor(100000 + Math.random() * 900000);
  this.socket.restore(this.useri,this.emaili,code);
}

checke(){
if(this.kodi===''){
  this.validation8.nativeElement.textContent='* Code field is empty!';
  setTimeout(() => {
    this.validation8.nativeElement.textContent='';
  }, 2500);
}
else{
    this.socket.checkiti(this.useri,Number(this.kodi),this.useri,this.emaili,this.passwordi);
}
}
signo(){
  this.register.nativeElement.style.display='none';
  this.signin.nativeElement.style.display='block';
}
signi(){
  this.register.nativeElement.style.display='block';
  this.signin.nativeElement.style.display='none';
}

resti(){
  this.restore.nativeElement.style.display='block';
  this.signin.nativeElement.style.pointerEvents='none';
  this.restore.nativeElement.style.pointerEvents='auto';
}

msee1(){
if(this.passwordu.nativeElement.type==='password'){
  this.passwordu.nativeElement.type='text';
}
else{
  this.passwordu.nativeElement.type='password';
}
}
msee2(){
if(this.passwordo.nativeElement.type==='password'){
  this.passwordo.nativeElement.type='text';
}
else{
  this.passwordo.nativeElement.type='password';
}
}
msee(){
  if(this.passka.nativeElement.type==='password'){
  this.passka.nativeElement.type='text';
}
else{
  this.passka.nativeElement.type='password';
}
}
clo(){
  this.restore.nativeElement.style.display='none';
  this.signin.nativeElement.style.pointerEvents='auto';
}
cli(){
  this.register.nativeElement.style.pointerEvents='auto';
  this.checkcode.nativeElement.style.display='none';
}
gb(){
  this.Addid.nativeElement.style.display='none';
  this.List.nativeElement.style.display='flex';
}
gi(){
    this.Addid.nativeElement.style.display='block';
  this.List.nativeElement.style.display='none';
  this.remvv=false;
}
addid(){
  if(this.listid===''){
    this.validation9.nativeElement.textContent='* Empty Id field!';
    setTimeout(() => {
      this.validation9.nativeElement.textContent='';
    }, 2500);
  }
  else{
  this.validation5.nativeElement.textContent='';
  this.socket.Add(this.listid,this.us);
  this.button19.nativeElement.disabled=true;
  setTimeout(() => {
    this.button19.nativeElement.disabled=false;
  }, 3500);
}
}

generate(){
const id = this.generateUUIDv4(); 
console.log(id);
  this.indiv.nativeElement.textContent=id;
}
generateUUIDv4(): string {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

check(){
  const code=this.indiv.nativeElement.textContent;
   if(this.nami===''){
    this.validation11.nativeElement.textContent='* Id name field is empty!';
    setTimeout(() => {
    this.validation11.nativeElement.textContent='';
    }, 2500);
  }
  if(this.maxx===''){
    this.validation10.nativeElement.textContent='* Max users field is empty!';
    setTimeout(() => {
      this.validation10.nativeElement.textContent='';
    }, 2500);
  }
  else if(code===''){
    this.validation12.nativeElement.textContent='* Generate Id first!';
    setTimeout(() => {
      this.validation12.nativeElement.textContent='';
    }, 2500);
  }
  
  else{
    if(this.nami!==''){
    this.socket.check(code!,this.nami,this.maxx,this.us);
    this.button21.nativeElement.disabled=true;
    setTimeout(() => {
      this.button21.nativeElement.disabled=false;
    }, 3500);
    }
  }
}
here(){
  this.idcrate.nativeElement.style.display='none';
  this.Addid.nativeElement.style.display='block';
}
rego(){
   this.idcrate.nativeElement.style.display='block';
  this.Addid.nativeElement.style.display='none';
}

onSearch(term: string){
this.socket.sear(term,this.currid);
}

onsearch(term : string){
  this.socket.searr(term,this.us,this.currid);
}

onValueSelected(select:string){
  if(this.selectedValue.toLocaleLowerCase()==='all'){
    this.socket.Recipts(this.currid);
    this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
this.button61.nativeElement.style.backgroundColor='transparent';
this.button61.nativeElement.style.color='#8a612b'; 
  this.srr=false;
  }
  else{
    const bt : HTMLButtonElement = document.createElement('button');
    this.renderer.addClass(bt,'kjsc');
    bt.style.backgroundImage='url("../assets/images/cross.png")';
    bt.style.right='3%';
    bt.addEventListener('click',()=>{
this.sort.nativeElement.style.pointerEvents='auto';
this.sort.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.pointerEvents='auto';
this.timee.nativeElement.style.display='none';
    });
  this.timee.nativeElement.style.display='block';
this.sort.nativeElement.style.pointerEvents='none';
this.sort.nativeElement.style.opacity='0.5';
this.recipts.nativeElement.style.opacity='0.5';
this.recipts.nativeElement.style.pointerEvents='none';

  if(this.selectedValue.toLocaleLowerCase()==='time'){
this.button26.nativeElement.textContent='Ascending';
this.button27.nativeElement.textContent='Descending';
this.tm.nativeElement.textContent='Time';
  }
  if(this.selectedValue.toLocaleLowerCase()==='rating'){
this.button26.nativeElement.textContent='Increasing';
this.button27.nativeElement.textContent='Decreasing';
this.tm.nativeElement.textContent='Rating';
  }
  if(this.selectedValue.toLowerCase()==='difficulty'){
    this.button26.nativeElement.textContent='Increasing';
this.button27.nativeElement.textContent='Decreasing';
this.tm.nativeElement.textContent='Difficulty';
  }
  this.tm.nativeElement.appendChild(bt);
}
}
chus1(){
 this.timee.nativeElement.style.display='none';
this.sort.nativeElement.style.pointerEvents='auto';
this.sort.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.pointerEvents='auto';
if(this.selectedValue.toLocaleLowerCase()==='time'){
this.socket.filter(this.selectedValue.toLowerCase(),this.currid,'Ascending');
}
if(this.selectedValue.toLocaleLowerCase()==='rating'){
  this.socket.filter(this.selectedValue.toLowerCase(),this.currid,'Increasing');
}
  if(this.selectedValue.toLowerCase()==='difficulty'){
    this.socket.filter(this.selectedValue.toLowerCase(),this.currid,'Increasing');
  }
this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
this.button61.nativeElement.style.backgroundColor='transparent';
this.button61.nativeElement.style.color='#8a612b'; 
  this.srr=false;
}
chus2(){
 this.timee.nativeElement.style.display='none';
this.sort.nativeElement.style.pointerEvents='auto';
this.sort.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.opacity='1';
this.recipts.nativeElement.style.pointerEvents='auto';
if(this.selectedValue.toLocaleLowerCase()==='time'){
this.socket.filter(this.selectedValue.toLocaleLowerCase(),this.currid,'Descending');
}
if(this.selectedValue.toLowerCase()==='rating'){
  this.socket.filter(this.selectedValue.toLowerCase(),this.currid,'Decreasing');
}
if(this.selectedValue.toLowerCase()==='difficulty'){
  this.socket.filter(this.selectedValue.toLowerCase(),this.currid,'Decreasing');
}
this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
this.button61.nativeElement.style.backgroundColor='transparent';
this.button61.nativeElement.style.color='#8a612b'; 
  this.srr=false;
}

gbk(){
  this.sort.nativeElement.style.display='none';
  this.List.nativeElement.style.display='flex';
  this.recipts.nativeElement.style.display='none';
}

submit(){
  let a=0;
if(this.tituli===''){
  this.validation16.nativeElement.textContent='* Empty Title field!';
  setTimeout(() => {
    this.validation16.nativeElement.textContent='';
  }, 2500);
  a++;
}
if(this.subtituli===''){
  this.validation17.nativeElement.textContent='* Empty Subtitle field!';
  setTimeout(() => {
    this.validation17.nativeElement.textContent='';
  }, 2500);
  a++;
}
if(this.timia===''){
  this.validation18.nativeElement.textContent='* Empty Cooking time field!';
  setTimeout(() => {
    this.validation18.nativeElement.textContent='';
  }, 2500);
  a++;
}
else if(Number(this.timia)<=0 || String(this.timia)[0]==='0'){
  this.validation18.nativeElement.textContent='* Invalid time!';
  setTimeout(() => {
    this.validation18.nativeElement.textContent='';
  }, 2500);
  a++;
}
if(this.archv===''){
  this.validation18.nativeElement.textContent='* Empty Time unit field!';
  setTimeout(() => {
  this.validation18.nativeElement.textContent='';
  }, 2500);
  a++;
}
if(this.diff===''){
  this.validation18.nativeElement.textContent='* Empty Difficulty field!';
  setTimeout(() => {
  this.validation18.nativeElement.textContent='* Empty Difficulty field!';
  }, 2500);
  a++;
}
if(this.diff==='' && this.archv==='' || this.diff==='' && this.timia==='' || this.archv==='' && this.timia===''){
  this.validation18.nativeElement.textContent='* Empty fields!';
setTimeout(() => {
    this.validation18.nativeElement.textContent='';
}, 2500);
a++;
}
if(this.imgs===''){
  this.validation15.nativeElement.textContent='* Empty Image field!';
  setTimeout(() => {
    this.validation15.nativeElement.textContent='';
  }, 2500);
  a++;
}
if(a==0){
  this.addrecipt.nativeElement.style.display='none';
  this.description.nativeElement.style.display='block';
  this.button30.nativeElement.style.display='flex';
  this.button31.nativeElement.style.display='flex';
}
}
gbv(){
  this.sort.nativeElement.style.display='flex';
  this.recipts.nativeElement.style.display='flex';
  this.addrecipt.nativeElement.style.display='none';
  this.tituli='';
    this.subtituli='';
    this.timia='';
    this.archv='';
    this.diff='';
    this.imgs='';
}
ghh(){
  this.description.nativeElement.style.display='none';
  this.addrecipt.nativeElement.style.display='block';
}

submiti(){
  if (!this.canSubmit) {
    console.warn('File not loaded yet!');
    return;
  }
  if(this.deskrip.nativeElement.innerHTML!==''){
    const idd=this.generateRandomId();
    this.socket.adddesk( idd, { content: this.deskrip.nativeElement.innerHTML });
    this.socket.Addnew(this.currid,idd,this.imgBase64,this.imgstype,this.tituli,this.subtituli,Number(this.timia),this.archv,0,this.diff,0,this.us);
    this.validation27.nativeElement.style.display='block';

    this.tituli='';
    this.subtituli='';
    this.timia='';
    this.archv='';
    this.diff='';
    this.imgs='';

    this.validation27.nativeElement.textContent='✅ Successfully added!';
    this.validation27.nativeElement.style.color='green'; 
    this.button30.nativeElement.style.display='none';
    this.button31.nativeElement.style.display='none';
    this.ifiqre=true;
    setTimeout(() => {
        this.validation27.nativeElement.style.display='none';
      this.validation27.nativeElement.textContent='';
      this.description.nativeElement.style.display='none';
       this.button30.nativeElement.style.display='flex';
      this.button31.nativeElement.style.display='flex';
      this.deskrip.nativeElement.innerHTML='';
     
    }, 2500);
  }
}

 fonti() {
    if (!this.fontsize) return;
    const size = `${this.fontsize}px`; 
    this.applyStyleToSelection({ 'font-size': size });
  }

  remv(){
    this.yesno.nativeElement.style.display='block';
    this.sadeskripte.nativeElement.style.backgroundColor='rgba(0, 0, 0, 0.2)';
this.sade.nativeElement.style.backgroundColor='rgba(0, 0, 0, 0.05)';
this.dfop.nativeElement.style.backgroundColor='rgba(0, 0, 0, 0.2)';
this.iko.nativeElement.style.pointerEvents='none';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='0.6';
this.button38.nativeElement.style.opacity='0.6';
this.button39.nativeElement.style.opacity='0.6';
this.button40.nativeElement.style.opacity='0.6';
  }
  clrts(){
     this.yesno.nativeElement.style.display='none';
this.sadeskripte.nativeElement.style.backgroundColor='#D8AE75';
this.sade.nativeElement.style.backgroundColor='#F7E0B7';
this.dfop.nativeElement.style.backgroundColor='#F7E0B7';
this.iko.nativeElement.style.pointerEvents='auto';
this.yesno.nativeElement.style.pointerEvents='auto';
this.button37.nativeElement.style.opacity='1';
this.button38.nativeElement.style.opacity='1';
this.button39.nativeElement.style.opacity='1';
this.button40.nativeElement.style.opacity='1';
  }

  id(){
    this.saide.nativeElement.style.display='flex';
    this.recipts.nativeElement.style.opacity='0.5';
    this.recipts.nativeElement.style.pointerEvents='none';
  }
  clid(){
    this.saide.nativeElement.style.display='none';
    this.recipts.nativeElement.style.opacity='1';
    this.recipts.nativeElement.style.pointerEvents='auto';
  }

  kaligraf(event: Event) {
    const value = (event.target as HTMLSelectElement).value || this.calli;
    if (!value) return;
    this.applyStyleToSelection({ 'font-family': value });
    if(this.isPhone()){
    this.onNewLine();
    }
  }

  coloro(event: Event) {
    const value = (event.target as HTMLSelectElement).value || this.colori;
    if (!value) return;
      const sel = window.getSelection();
  if (this.savedRange && sel) {
    sel.removeAllRanges();
    sel.addRange(this.savedRange); 
  }
    this.applyStyleToSelection({ color: value });
    if(this.isPhone()){
    this.onNewLine();
    }
  }
onNewLine() {
  const root = this.deskrip.nativeElement;

  const br = document.createElement('br');
  root.appendChild(br);

  const span = document.createElement('span');
  span.style.color = this.colori || 'black';
  span.style.fontFamily = this.calli || 'Arial';
  span.style.fontSize = this.fontsize ? `${this.fontsize}px` : '16px';
  span.appendChild(document.createTextNode('\u200B'));
  root.appendChild(span);

  const sel = window.getSelection();
  if (!sel) return;
  const range = document.createRange();
  range.setStart(span.firstChild!, 1);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

onDropdownTouchStart() {
  const sel = window.getSelection();
  if (sel && sel.rangeCount > 0) {
    this.savedRange = sel.getRangeAt(0).cloneRange();
  }
}

 private applyStyleToSelection(styles: Record<string, string>) {
  const root = this.deskrip?.nativeElement;
  if (!root) return;

  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) {
    this.insertStyledSpanAtEnd(root, styles);
    return;
  }

  const range = sel.getRangeAt(0);

  if (!root.contains(range.commonAncestorContainer)) {
    this.insertStyledSpanAtEnd(root, styles);
    return;
  }

  if (sel.isCollapsed) {
    const span = document.createElement('span');
    Object.keys(styles).forEach(k => span.style.setProperty(k, styles[k]));
    const zw = document.createTextNode('\u200B'); 
    span.appendChild(zw);
    range.insertNode(span);
    const newRange = document.createRange();
    newRange.setStart(zw, 1);
    newRange.collapse(true);
    sel.removeAllRanges();
    sel.addRange(newRange);
  } else {
    const frag = range.extractContents();

    const propsToRemove = Object.keys(styles); 
    this.removeStylePropsFromFragment(frag, propsToRemove);

    const wrapper = document.createElement('span');
    Object.keys(styles).forEach(k => wrapper.style.setProperty(k, styles[k]));
    wrapper.appendChild(frag);
    range.insertNode(wrapper);

    sel.removeAllRanges();
    const after = document.createRange();
    after.setStartAfter(wrapper);
    after.collapse(true);
    sel.addRange(after);
  }

  this.cleanZeroWidthPlaceholders(root);
  this.mergeAdjacentSpans(root);
}

private removeStylePropsFromFragment(node: Node, props: string[]) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;
    props.forEach(p => el.style.removeProperty(p));
    if (!(el.getAttribute('style') ?? '').trim()) el.removeAttribute('style');
  }

  const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null);
  while (walker.nextNode()) {
    const el = walker.currentNode as HTMLElement;
    props.forEach(p => el.style.removeProperty(p));
    if (!(el.getAttribute('style') ?? '').trim()) el.removeAttribute('style');
  }
}

gbj(){
  this.sort.nativeElement.style.display='flex';
  this.recipts.nativeElement.style.display='flex';
  this.sadeskripte.nativeElement.style.display='none';
  this.socket.getfavs(this.currid,this.us);
}

stff(){
if(!this.srr && this.button61.nativeElement.style.backgroundColor==='transparent' || this.pp==0){
  this.pp=1;
  this.stf.nativeElement.style.backgroundImage='url("/assets/images/star.png")'; 
  this.button61.nativeElement.style.backgroundColor='#8a612b';
  this.button61.nativeElement.style.color='white';
  this.srr=true;
  this.safave.nativeElement.style.display='block';
  this.sort.nativeElement.style.backgroundColor='rgba(247, 224, 183, 0.3)';
  this.recipts.nativeElement.style.opacity='0.5';
  this.recipts.nativeElement.style.pointerEvents='none';
  this.sort.nativeElement.style.pointerEvents='none';
   this.button63.nativeElement.style.pointerEvents='auto';
  this.safave.nativeElement.style.pointerEvents='auto'
}
else{
this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
this.button61.nativeElement.style.backgroundColor='transparent';
this.button61.nativeElement.style.color='#8a612b'; 
this.sort.nativeElement.style.backgroundColor='#F7E0B7';
  this.recipts.nativeElement.style.opacity='1';
  this.recipts.nativeElement.style.pointerEvents='auto';
  this.sort.nativeElement.style.pointerEvents='auto';
  this.socket.Recipts(this.currid);
this.srr=false;
}
}

clss(){
  this.safave.nativeElement.style.display='none';
  this.stf.nativeElement.style.backgroundImage='url("/assets/images/star (1).png")'; 
this.button61.nativeElement.style.backgroundColor='transparent';
this.button61.nativeElement.style.color='#8a612b';
 this.sort.nativeElement.style.backgroundColor='#F7E0B7';
  this.recipts.nativeElement.style.opacity='1';
  this.recipts.nativeElement.style.pointerEvents='auto';
  this.sort.nativeElement.style.pointerEvents='auto';
  setTimeout(() => {
    this.srr=false;
  }, 1000);
}

daaload(){
  this.socket.favs(this.us,this.currid);
  setTimeout(() => {
    this.button63.nativeElement.click();
  }, 500);
  setTimeout(() => {
     this.stf.nativeElement.style.backgroundImage='url("/assets/images/star.png")'; 
  this.button61.nativeElement.style.backgroundColor='#8a612b';
  this.button61.nativeElement.style.color='white';
  }, 500);
  setTimeout(() => {
    this.srr=true;
  }, 700);
}

clisd(){
this.saiue.nativeElement.style.display='none';
this.recipts.nativeElement.style.pointerEvents='auto';
this.recipts.nativeElement.style.opacity='1';
}
ussss(){
this.saiue.nativeElement.style.display='block';
this.recipts.nativeElement.style.pointerEvents='none';
this.recipts.nativeElement.style.opacity='0.5';
}

daakm(){
  if(this.comm!==''){
    const id = this.generateRandomId();
    this.socket.comenti(this.corod,this.us,this.comm,id);
    this.comm='';
  }
}

private insertStyledSpanAtEnd(root: HTMLElement, styles: Record<string, string>) {
  root.focus();

  const span = document.createElement('span');
  Object.keys(styles).forEach(k => span.style.setProperty(k, styles[k]));
  const zw = document.createTextNode('\u200B');
  span.appendChild(zw);
  root.appendChild(span);

  const sel = window.getSelection();
  if (!sel) return;

  const r = document.createRange();
  r.setStart(zw, 1);
  r.collapse(true);
  sel.removeAllRanges();
  sel.addRange(r);

  span.scrollIntoView({ block: 'nearest', inline: 'nearest' });

  this.cleanZeroWidthPlaceholders(root);
  this.mergeAdjacentSpans(root);
}




private cleanZeroWidthPlaceholders(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  textNodes.forEach(t => {
    if (!t.nodeValue) return;
    if (t.nodeValue === '\u200B') {
      const p = t.parentElement;
      if (p && p.textContent && p.textContent.replace(/\u200B/g, '').length > 0) {
        t.nodeValue = '';
      }
    } else if (t.nodeValue.includes('\u200B')) {
      t.nodeValue = t.nodeValue.replace(/\u200B/g, '');
    }
  });

  const walker2 = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const toRemove: Text[] = [];
  while (walker2.nextNode()) {
    const tn = walker2.currentNode as Text;
    if (!tn.nodeValue || tn.nodeValue.length === 0) toRemove.push(tn);
  }
  toRemove.forEach(n => n.parentNode?.removeChild(n));
}

private mergeAdjacentSpans(root: HTMLElement) {
  let node = root.firstChild;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'SPAN') {
      const span = node as HTMLSpanElement;
      let next = span.nextSibling;
      while (next && next.nodeType === Node.ELEMENT_NODE && (next as HTMLElement).tagName === 'SPAN') {
        const nextSpan = next as HTMLSpanElement;
        if (span.getAttribute('style') === nextSpan.getAttribute('style')) {
          while (nextSpan.firstChild) span.appendChild(nextSpan.firstChild);
          const toRemove = nextSpan;
          next = next.nextSibling;
          toRemove.remove();
          continue;
        } else break;
      }
    }
    node = node.nextSibling;
  }
}

generateRandomId(length: number = 16): string {
  let id = '';
  const chars = 'abcdef0123456789';
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) return;

  const file = input.files[0];

  this.imgBase64 = file;
  this.imgstype = file.type;
  this.canSubmit = true;

  console.log('File ready for upload:', file);
}

allowOnlyNumberss(event: KeyboardEvent) {
  const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
  if (allowedKeys.indexOf(event.key) !== -1) {
    return; 
  }
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault(); 
  }
}
blockTyping(event: KeyboardEvent) {
  const allowed = ['ArrowUp', 'ArrowDown', 'Tab', 'Shift', 'Control']; 
  if (!allowed.includes(event.key)) {
    event.preventDefault();
  }
}

hap(){
  this.sort.nativeElement.style.display='none';
  this.recipts.nativeElement.style.display='none';
  this.addrecipt.nativeElement.style.display='block';
}
chec(event:KeyboardEvent){
    const selection = window.getSelection();
  if (!selection || !selection.anchorNode) return;

  const parent = selection.anchorNode.parentElement;

  if (parent && parent.tagName === 'P') {
    event.preventDefault();
  }
}

joj(){
this.tablee.nativeElement.style.display='table';
this.favebi.nativeElement.style.pointerEvents='none';
this.favebi.nativeElement.style.opacity='0';
}
cccc(){
 this.tablee.nativeElement.style.display='none';
this.favebi.nativeElement.style.pointerEvents='auto';
this.favebi.nativeElement.style.opacity='1'; 
}
addi(){
const hr = document.createElement('hr');
  hr.style.border = '3px dotted black';
  hr.style.pointerEvents = 'none';
  this.deskrip.nativeElement.appendChild(hr);

  const textNode = document.createTextNode('\u200B');
  this.deskrip.nativeElement.appendChild(textNode);

  const range = document.createRange();
  const sel = window.getSelection();

  range.setStartAfter(hr);
  range.collapse(true);

  sel?.removeAllRanges();
  sel?.addRange(range);

  this.deskrip.nativeElement.focus();

console.log(this.deskrip.nativeElement.textContent);
}

isValidEmail(email: string): boolean {
 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
numberControl = new FormControl('', [
  Validators.required,
  Validators.pattern('^[0-9]*$') 
]);
  allowOnlyNumbers(event: KeyboardEvent) {
    const allowed = /[0-9]/;
    if (!allowed.test(event.key)) {
      event.preventDefault(); 
    }
  }
  isPhone() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

}

function arrayBufferToBase64(buffer: Uint8Array) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
function ydel() {
  throw new Error('Function not implemented.');
}

function ndel() {
  throw new Error('Function not implemented.');
}

