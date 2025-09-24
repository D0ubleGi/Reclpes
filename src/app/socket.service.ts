import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { max } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: Socket;
  isBrowser: boolean = false;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);

  const savedName = this.isBrowser ? localStorage.getItem('name') : '';
  const savedPassword = this.isBrowser ? localStorage.getItem('password') : '';

this.socket = io('https://foods-8hzc.onrender.com', {
    transports: ['websocket', 'polling'],
  withCredentials: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  timeout: 20000,
  auth: {
    name: savedName || '',
    pass: savedPassword || ''
  }
});
    this.socket.io.on('reconnect_attempt', () => {
      console.log('[Debug] Attempting to reconnect...');
    });

    this.socket.io.on('reconnect', (attempt: any) => {
      console.log(`[Debug] Reconnected after ${attempt} attempts, new socket id: ${this.socket.id}`);
    });

    this.socket.on('connect', () => {
      console.log('[Debug] Connected to Socket.IO server:', this.socket.id);
    });

    this.socket.on('connect_error', (err: { message: any }) => {
      console.error('[Debug] Socket connection error:', err.message);
    });
  }

  register(user:string,email:string,password:string){
    this.socket.emit('register',user,email,password);
  }
  onerror(callback:(err:string)=>void){
    this.socket.on('register-taken',(err:string)=>{
      callback(err);
    });
  }

  signin(user:string,password:string){
    this.socket.emit('signin',user,password);
  }

   onsignin(callback:(vall:string,user:string)=>void){
      this.socket.on('wronguser',(vall:string,user:string)=>{
        callback(vall,user);
      });
    }

  restore(username:string,email:string,code:number){
    this.socket.emit('reset',username,email,code);
  }
ondaaemail(callback:(email:string,name:string,code:number)=>void){
  this.socket.on('daaemaili',(email:string,name:string,code:number)=>{
    callback(email,name,code);
  });
}


cheemail(email:string){
  this.socket.emit('cheemail',email);
}
oncheemail(callback: (res:string)=>void){
this.socket.on('checkedemail',(res:string)=>{
callback(res);
});
}
sendee(callback:(email:string,user:string,pass:string)=>void){
  this.socket.on('sendee',(email:string,user:string,pass:string)=>{
    callback(email,user,pass);
  });
}
 checkiti(name:string,code:number,username:string,email:string,password:string){
  this.socket.emit('dacheke',name,code,username,email,password);
}
oncheckiti(callback: (code:string)=>void){
  this.socket.on('onchecki',(code:string)=>{
    callback(code);
  });
}
  adcodi(username:string,email:string,code:number){
    this.socket.emit('dakode',username,email,code);
  }
  onadcodi(callback:(email:string,name:string,code:number)=>void){
    this.socket.on('daaemail',(email:string,name:string,code:number)=>{
      callback(email,name,code);
    });
  }

     check(idd:string,nami:string,maxx:string,useri:string){
      this.socket.emit('check',idd,nami,maxx,useri);
    }
    oncheck(callback: (resp:string)=>void){
      this.socket.on('resp',(resp:string)=>{
        callback(resp);
      });
    }

      Add(Idd:string,user:string){
      this.socket.emit('Add',user,Idd);
    }
    onAdded(callback: (respi:string)=>void){
      this.socket.on('respi',(respi:string)=>{
        callback(respi);
      });
    }


    load(user:string){
      this.socket.emit('load',user);
    }
    onload(callback:(Recipes:any)=>void){
      this.socket.on('loaded',(Recipes:any)=>{
        callback(Recipes);
      });
    }

    Recipts(id:string){
      this.socket.emit('recipt',id);
    }
    onRecipt(callback: (Recipts:any)=>void){
      this.socket.on('reciptebi',(Recipts:any)=>{
        callback(Recipts);
      });
    }

    sear(term:string,id:string){
      this.socket.emit('sear',term,id);
    }
    searr(term:string,user:string,id:string){
      this.socket.emit('searr',term,user,id);
    }

    filter(value:string,id:string,type:string){
      this.socket.emit('filter',value,id,type);
    }
Addnew(
  id: string,
  idd: string,
  img: string,
  imgstype: string,
  title: string,
  subtitle: string,
  time: number,
  hour: string,
  rate: number,
  level: string,
  amount: number,
  user: string
): void {
  const payload = { id, idd, img, imgstype, title, subtitle, time, hour, rate, level, amount, user};
  this.socket.emit('addnew', payload);
}

adddesk(id:string,html:any){
  this.socket.emit('desk',id,html);
}
getdesk(id:string){
  this.socket.emit('getdesk',id);
}
ongetdesk(callback:(html:any,info:any)=>void){
  this.socket.on('getit',(html,info)=>{
    callback(html,info);
  });
}
addrem(idi:string,id:string,user:string){
  this.socket.emit('addrem',idi,id,user);
}
onaddred(callback:(inf:string)=>void){
  this.socket.on('faved',(inf)=>{
    callback(inf);
  });
}
remv(id:string,user:string){
  this.socket.emit('remv',id,user);
}
onremv(callback:(id:string,user:string)=>void){
this.socket.on('meap',(id,user)=>{
  callback(id,user);
});
}
daaremv(id:string,user:string){
  this.socket.emit('dell',id,user);
}
ondaaremv(callback:(inf:string,user:any,email:string,uai:string,title:string)=>void){
  this.socket.on('delled',(inf:string,user:any,email:string,usi:string,title:string)=>{
    callback(inf,user,email,usi,title);
  });
}

snde(user:string,useri:string,title:string){
  this.socket.emit('sende',user,useri,title);
}
onsnde(callback:(email:string,user:string,useri:string,title:string,id:string)=>void){
  this.socket.on('senkk',(email,user,useri,title,id)=>{
    callback(email,user,useri,title,id);
  });
}
chei(id:string,user:string){
  this.socket.emit('chei',id,user);
  this.socket.emit('cui',id,user);
}
onchei(callback:(inf:string,id:string,user:string)=>void){
  this.socket.on('vi',(inf,id,user)=>{
    callback(inf,id,user);
  });
}

oncui(callback:(inf:string)=>void){
  this.socket.on('kkj',(inf)=>{
callback(inf);
  });
}

addrt(id:string,rate:number,user:string){
  this.socket.emit('rtet',id,rate,user);
}
onvali(callback:(id:string)=>void){
  this.socket.on('daio',(id)=>{
    callback(id);
  });
}
favs(user:string,id:string){
  this.socket.emit('favv',user,id);
}
getfavs(id:string,user:string){
  this.socket.emit('getfavs',id,user);
}
ongetfavs(callback:(favs:any)=>void){
  this.socket.on('aigefavs',(favs:any)=>{
    callback(favs);
  });
}
comenti(id:string,user:string,comment:string,idd:string){
  const date = new Date().toLocaleString();
  this.socket.emit('comment',id,user,comment,date,idd);
}
daakome(id:string,user:string){
  this.socket.emit('comms',id,user);
}

oncomenti(callback:(comms:any)=>void){
  this.socket.on('koment',(comms)=>{
    callback(comms);
  });
}
editcomm(id:string,idd:string){
  this.socket.emit('editt',id,idd);
}
oneditcomm(callback:(id:string,idd:string,comment:string)=>void){
  this.socket.on('editit',(id,idd,comment)=>{
    callback(id,idd,comment);
  });
}

editch(id:string,idd:string,comment:string){
  this.socket.emit('shecv',id,idd,comment);
}

comdel(id:string,idd:string){
  this.socket.emit('delcom',id,idd);
}

washale(id:string,user:string){
  this.socket.emit('wash',id,user);
}
onwashale(callback:(id:string,user:string,title:string)=>void){
this.socket.on('shlis',(id,user,title)=>{
  callback(id,user,title);
});
}

washala(id:string,user:string){
  this.socket.emit('washala',id,user);
}

lusers(id:string,user:string){
  this.socket.emit('lusers',id,user);
}
onlusers(callback:(total:any)=>void){
  this.socket.on('ttlus',(total)=>{
callback(total)
  });
}

onaem(callback:(obj:any)=>void){
  this.socket.on('aem',(obj)=>{
    callback(obj);
  });
}
}