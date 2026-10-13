const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{let w=new BrowserWindow({width:1550,height:960,minWidth:1000,minHeight:700,backgroundColor:'#080d12',autoHideMenuBar:true,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});w.loadFile('index.html');});
app.on('window-all-closed',()=>app.quit());
