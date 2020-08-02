import React, {useState} from 'react';
import '../App.css';
import 'typeface-roboto';
import axios from 'axios';
import Post from './Post';
import Intro from './Intro'


function Feed(props){
    const [search, setSearch] = useState(props.search)
    const [state,setState] = useState(
        {
          searchValue: '',
          feedlimit: 10,
          itemTitle: [],
          itemBody: [],
          imgLocation: [],
          posts: []
        }
      );
      
        
        if(state.searchValue !== props.search &&  props.search !== ''){
            axios.get(`https://images-api.nasa.gov/search?q=${props.search}`)
            .then((response) => {
                let data = response.data.collection.items;
                let title = [];
                let images = [];
                let description = [];
                let postsTemp = [];

                for(let i = 0; i < state.feedlimit; i++){
                    title[i] = `${data[i].data[0].title}`;
                    description[i] = `${data[i].data[0].description}`;
                    images[i] = `${data[i].links[0].href}`;
                    postsTemp.push(<Post key = {i} title = {title[i]} body = {description[i]} imgLocation = {images[i]}/>);
                }
                setState({ itemTitle: title, itemBody: description, searchValue: props.search, imgLocation: images, posts: postsTemp, feedlimit: 10});
            })
            .catch(function (error) {
                alert(`No Results Found`);
                console.log(error);
            });
        }
        
        const firstSearch = async (e) => {
            e.preventDefault()

            axios.get(`https://images-api.nasa.gov/search?q=${search}`)
            .then((response) => {
                let data = response.data.collection.items;
                let title = [];
                let images = [];
                let description = [];
                let postsTemp = [];

                for(let i = 0; i < state.feedlimit; i++){
                    title[i] = `${data[i].data[0].title}`;
                    description[i] = `${data[i].data[0].description}`;
                    images[i] = `${data[i].links[0].href}`;
                    postsTemp.push(<Post key = {i} title = {title[i]} body = {description[i]} imgLocation = {images[i]}/>);
                }
                setState({ itemTitle: title, itemBody: description, searchValue: props.search, imgLocation: images, posts: postsTemp, feedlimit: 10});
            })
            .catch(function (error) {
                alert(`No Results Found`);
                console.log(error);
            });


        }

        return (
            <div>
                {state.posts.length <= 0 ? <Intro /> : <></>}
                 {state.posts.length > 0 ? <>{state.posts}</> : <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}><input placeholder='Example: Mars' onChange={e => setSearch(e.target.value)} style={{height: '40px', width: '70%', maxWidth: '900px', paddingLeft: '15px',border: 'none', borderRadius: '20px 0px 0px 20px', fontSize: '18px'}}/><button onClick = {firstSearch} style ={{height: '42px', padding: '10px', border: 'none', borderRadius:'0px 20px 20px 0px', fontSize: '18px', cursor: 'pointer'}}>Search</button></div>}
             </div>
         );
 }

 export default Feed;