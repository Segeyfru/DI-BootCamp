import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        
    def __str__(self):
        return str(f'Suit: {self.suit}, Value: {self.value}\n')

suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']    
values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    
class Deck:
    def __init__(self):
        self.deck_list = []
    
    def __str__(self):
        cards = [str(card) for card in self.deck_list]
        return "\n".join(cards) 

    def add_card(self, card):
        self.deck_list.append(card)
        
    def full_deck(self):
        i = 0
        for suit in suits:
            for value in values:
                i +=1
                card = Card(suit,value)
                self.add_card(card)
                
        # print(self.deck_list)
        # print(i)
        
    def shuffle(self):
        cards = self.deck_list
        counter = 0
        for card in cards:
            counter +=1
        if counter == 52:
            random.shuffle(cards)
        else:
            print('Deck is not full')
        return self
    
    def deal(self):
       self.shuffle
       randon_index = int(random.uniform(0, 52))
       print(f'Index was {randon_index} ')
       print(self.deck_list[randon_index])
       del self.deck_list[randon_index]
       
       

      
        
deck1 = Deck()
        
deck1.full_deck()
deck1.shuffle()
deck1.deal()

print(deck1)

deck1.shuffle()