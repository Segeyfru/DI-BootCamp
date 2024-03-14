import os

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    
    def __init__(self):       
        with open(dir_path + "\\english_words.txt", 'r') as f:
            engl_words = f.read()
            # print(type(engl_words))
            self.list_of_words = engl_words.split()
            # print(type(self.list_of_words))
    
    def is_valid_word(self, check):
        return check.upper() in self.list_of_words
        # for word in self.list_of_words:
        #     if word == check:
        #         return True
        #     else:
        #         return False
            
    def get_anagrams(self, word):
        anagram_list = []
        if self.is_valid_word(word):

        # for check in self.list_of_words:
        #     if check == word:
            for item in self.list_of_words:
                if len(item) == len(word):
                    if item != word.upper():
                        if sorted(item) == sorted(word.upper()):
                            anagram_list.append(item)
                            
        return anagram_list
    
    def print_word(self, word):
        return word.upper()
        

test_one = AnagramChecker()
# print(test_one.list_of_words)
# print(test_one.is_valid_word("meat"))
# print(test_one.get_anagrams('meat'))
# print(test_one.print_word('meat'))