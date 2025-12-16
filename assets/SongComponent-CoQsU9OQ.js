var x=Object.defineProperty;var S=(n,e,t)=>e in n?x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>S(n,typeof e!="symbol"?e+"":e,t);import{R as y,j as s,d as h}from"./TagsComponent-vu07Nl3u.js";import{q as m,c as p,g}from"./HeaderWithSearchComponent-DlSI16zO.js";import{d as f}from"./main-BC4DEmcr.js";import{f as j}from"./fetchSongs-B63UUTtM.js";import{T as w}from"./Topics-Ch9FFmwk.js";class $ extends y.Component{constructor(t){super(t);c(this,"fetchArtistInfo",async t=>{try{const r=m(p(f,"songs")),i=(await g(r)).docs.filter(o=>(o.data().artist||"").toLowerCase().includes(t.toLowerCase()));if(i.length>0){const o=i[0].data(),a=i[0].ref;this.setState({artist:{...o,docRef:a},error:null}),j(t,this.updateSongs,this.updateError)}}catch(r){console.error("Error fetching artist: ",r),this.setState({error:"Error fetching artist data."})}});c(this,"isArtistInArtistsCollection",async t=>{try{const r=m(p(f,"artists")),i=(await g(r)).docs.find(o=>(o.data().name||"").toLowerCase()===t.toLowerCase());if(i){const o=i.data().imageUrl||"";this.setState(a=>({artist:{...a.artist,name:t,imageUrl:o}}))}else console.warn(`Artist "${t}" not found in collection.`)}catch(r){console.error("Error checking artists collection: ",r),this.setState({error:"Error checking artists collection."})}});c(this,"updateSongs",t=>{this.setState({songs:t})});c(this,"updateError",t=>{this.setState({error:t})});this.state={artist:null,songs:[],error:null,pageTitle:document.title||""}}componentDidMount(){const{artistName:t}=this.props;t?(this.fetchArtistInfo(t),this.isArtistInArtistsCollection(t)):this.setState({error:"No artist name provided."})}render(){const{artist:t,songs:r,error:l,pageTitle:i}=this.state,a=r.filter(d=>!i.includes(d.title)).slice(0,20);return s.jsxs("div",{className:"song-component",children:[l&&s.jsx("p",{children:l}),t&&a.length>0?s.jsxs("div",{children:[s.jsx("h2",{className:"h2",children:"Related Lyrics"}),s.jsx("div",{className:"songs-grid",children:a.slice(0,50).map((d,u)=>s.jsx("div",{className:"song-card",onClick:()=>window.location.href=`${h}/src/songs/${encodeURIComponent(d.title)}/index.html`,children:d.title},u))}),t.name!=null&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"artist-container",children:[s.jsxs("p",{alt:`Find lyrics of ${this.props.artistName}`,children:["Or find more songs on the profile of",s.jsx("a",{className:"artist-link",href:`${h}/src/artists/${this.props.artistName}/index.html`,children:this.props.artistName})]}),s.jsx("div",{className:"artist-image",onClick:()=>{window.location.href=`${h}/src/artists/${this.props.artistName}/index.html`},style:{backgroundImage:`url('${t.imageUrl}')`}})]}),s.jsx("style",{children:`
                                    .artist-container {
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        text-align: center;
                                        margin-bottom: 20px;
                                    }
                                    
                                    .artist-link {
                                        font-weight: bold;
                                        color: #333;
                                        text-decoration: none;
                                        color: #222;
                                        background: #fff;
                                        border-radius: 5px;
                                        z-index: 2;
                                        margin: 5px;
                                    }
                                    .artist-link:hover{
                                        opacity: .7;
                                    }

                                    .artist-image {
                                        width: 150px;
                                        height: 150px;
                                        border-radius: 50%;
                                        background-size: cover;
                                        background-position: center;
                                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                                        transition: transform 0.3s ease;
                                        cursor: pointer;
                                        margin-top: 10px;
                                    }

                                    .artist-image:hover {
                                        opacity: .9;
                                        transform: scale(1.1);
                                    }
                                    `})]}),s.jsx(w,{})]}):null]})}}export{$ as A};
