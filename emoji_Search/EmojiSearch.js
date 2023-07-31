import React, { useState } from 'react'
const emojiData=[
{
    id:'1',
    Symbol:'😂',
    nameEmoji:'laugh',
},
{
    id:'2',
    Symbol:'💕',
    nameEmoji:'love',
},
{
    id:'3',
    Symbol:'😎',
    nameEmoji:'Attitude'
},
{
    id:'4',
    Symbol:'🤔',
    nameEmoji:'thinking'
},
{
    id:'5',
    Symbol:'🎶',
    nameEmoji:'miusic'
},
{
    id:'6',
    Symbol:'🤐',
    nameEmoji:'moody'
},
{
    id:'7',
    Symbol:'😢',
    nameEmoji:'cry'
},
{
    id:'8',
    Symbol:'😏',
    nameEmoji:'ignore'
},{
    id:'9',
    Symbol:'🤮',
    nameEmoji:'vomit'
},
{
    id:'10',
    Symbol:'🥶',
    nameEmoji:'shiver'
}
];
function EmojiSearch() {
    const [SearchEmoji,setStateEmoji]=useState("");
        const handleChange=(e)=>{
            setStateEmoji(e.target.value);
        }
        const showEmoji= emojiData.filter((emoji)=>{
            const emojiName=emoji.nameEmoji.toLowerCase();
            return(emojiName.includes(SearchEmoji.toLowerCase()));
        });
  return (
    <div id='container'>
        <h1>EmojiSearch</h1>
    <input type="text" placeholder='Search Emoji' value={SearchEmoji} onChange={handleChange}/>
    <div>
    {
    showEmoji.map((emoji)=>emoji.Symbol)
    }
    </div>

        
    </div>
  )
}

export default EmojiSearch