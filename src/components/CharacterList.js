import React, { Component } from "react";
import axios from "axios";

import SingleCharacter from "./SingleCharacter";



class CharacterList extends Component {
    state = {
        characterList: []
    }

    async componentDidMount(){
    const characters = this.props.characters;
    const newList = []
        for (let i = 0; i < characters.length; i++){
            let response = await axios.get(characters[i]);
            newList.push(response.data); 
            this.setState({characterList: newList});   
        }
    }

    render(){
        const {characters} = this.props;
        const {characterList} = this.state
        // console.log(characters);

        return(
            <div>{
                characterList.length !==characters.length ?
                <div>Loading characters...</div> :
                characterList.map((char, index) => {
                    return(
                        <div key={index}>{char.name}</div>
                    );
                })
            }</div>
        );
    }
}

export default CharacterList;