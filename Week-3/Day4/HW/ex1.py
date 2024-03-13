import os
import random

dir_path = os.path.dirname(os.path.realpath(__file__))
print(f'DIR PATH {dir_path[:-2]} just hw {dir_path[-2:]}')
dir_path = dir_path.replace('\\', '/')
words = []
def get_words_from_file():
    print(dir_path)
    with open(dir_path + '/words.txt', 'r') as words_file:
        wordss = words_file.readlines()
        # print(wordss)
        cleaned_words =[]
        for word in wordss:
            cleaned_words.append(word.strip())
        return cleaned_words
        
words = get_words_from_file() 
# print(words)

def get_random_sentence(length):
    sentence = str('')
    for _ in range(length):
        random_word = str(random.choice(words))
        sentence += f'{random_word} '
    print(sentence)
    
    
def main():
    while True:
        print('This program create a sentances. You can chose from 2 words to 20.')
        length = int(input('How long you wont a sentence? '))
        
        # print(type(length))
        # get_random_sentence(length)
        # break
        if length >= 2:
            get_random_sentence(length)
            break
        elif length <= 20:
            get_random_sentence(length)
            break
        

    

# get_random_sentence(10)

main()


