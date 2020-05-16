import React, {useState} from 'react';
import '../App.css';
import 'typeface-roboto';
import axios from 'axios';
import Post from './Post';


function Feed(props){
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
        
        return (
            <div>
                 {state.posts}
             </div>
         );
 }

 export default Feed;