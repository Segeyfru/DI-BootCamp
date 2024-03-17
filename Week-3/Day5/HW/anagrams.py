from anagram_checker import AnagramChecker
import string

def main():
    print('\nHi User! You can choise ')
    print('1. If you want to look anagrams from your word')
    print('2. to Exit')
    
    
def check_or_exit():
    main()
    while True:
        choice = int(input('What is your choice? '))
        
        if choice == 1:
            while True:
                user_word = input('Enter a word: ').strip()
                clean_user_word = remove_punctuation(user_word)
                anagram = AnagramChecker()
                check_user_word = anagram.is_valid_word(clean_user_word)
                upper_word = anagram.print_word(clean_user_word)
                if ' ' in clean_user_word:
                    print('Write only ONE word')
                else:
                    if check_user_word:
                        anagrams = anagram.get_anagrams(clean_user_word)
                        # print(anagrams)
                        print(f'''
                            YOUR WORD:"{upper_word}"
                            this is a valid English word.
                            Anagrams fo your word: {", ".join(anagrams)}''')
                        break
                    else:
                        print('\nYou have to be more careful!')
                        print('You may check only ONE and only EXISTING word')
                
            
        elif choice == 2:
            print(' Look like it is 2')
            to_exit()
            break


def remove_punctuation(text):
    # for punctuation in string.punctuation:
    #     word = word.replase(punctuation, '')
    #     return text
    translator = str.maketrans('', '', string.punctuation)
    return text.translate(translator)
    
    
    
def to_exit():
    print('User decided to exit')
    
check_or_exit()