import React from 'react'
import FriendCard from '../components/FriendCard'
import Wrapper from '../components/Wrapper'
import friends from './FriendCard/potter.json'
import VictoryCard from '../components/VictoryCard'
import LoserCard from './LoserCard'
import Header from './Header'

import { Button, ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Navbar from './Navbar'
var shuffle = require('shuffle-array')

const styles = {
  answerWrong: {
    color: 'red'
  },
  asnwerRight: {
    color: 'green'
  }

}

class GameCards extends React.Component {

  state = {
    friends,
    counter: 0,
    topscore: 0,
    idArray: [],
    modal: false,
    modal2: false,
    current: "Click any image to start",
    type: 'friends'
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  styleChange = event => {
    event.preventDefault()
    this.setState({ changeStyle: 1 })

  }

  shuffleDeck = id => {
    this.setState({ counter: this.state.counter + 1 })
    if (parseInt(this.state.counter) === 11) {
      this.setState({ topScore: 12 })
      this.setState({ counter: 0, idArray: [], current: "Click any image to start" });
      this.setState({ modal: !this.state.modal })
      return
    }
    if (this.state.idArray.includes(id)) {
      this.setState({ modal2: !this.state.modal2 })
      this.setState({ counter: 0, idArray: [] });

      if (this.state.counter > this.state.topscore) {
        this.setState({
          topscore: this.state.counter,
          current: "You guessed incorrectly"
        })

      }
    }
    else {
      this.setState({ counter: this.state.counter + 1 })
      this.setState({ idArray: this.state.idArray += id });
      this.setState({
        friends: shuffle(this.state.friends),
        current: "You guessed correct"
      })
    }
  }

  render() {
    return (

      <div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <VictoryCard />
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>
        <div>
          <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
            <ModalHeader toggle={this.toggle2}></ModalHeader>
            <ModalBody>
              <LoserCard />
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>


        <Navbar score={this.state.counter} topScore={this.state.topscore} current={this.state.current} className="container" />
        <Header />

        <Wrapper>
          {
            this.state.friends.map(friend => {
              return (
                <FriendCard
                  key={friend.id}
                  id={friend.id}
                  name={friend.name}
                  image={friend.image}
                  handleClick={this.shuffleDeck}
                />
              )
            })
          }
        </Wrapper>
      </div>
    )
  }
}

export default GameCards