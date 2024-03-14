import string


class Text:
    def __init__(self, text):
        self.text = text

    
    def frequency_of_words(self, word):
        counter = 0
        for line in self.text:
            if line == word:
                counter +=1                
        if counter == 0:
            counter = None
        return counter
    
    def remove_punctuation_from_list(self):
        # Создаем строку, содержащую все знаки пунктуации
        punctuation = string.punctuation
        # Создаем таблицу перевода для удаления знаков пунктуации
        translation_table = str.maketrans('', '', punctuation)
        # Удаляем пунктуацию из каждой строки списка и формируем новый список без пунктуации
        cleaned_list = [line.translate(translation_table) for line in self.text]
        return cleaned_list


    def create_di(self):
        text = self.text
        di = {}
        the_bigger = 0
        for word in text:
            if word in di:
                di[word] += 1
                if di[word] > the_bigger:
                    the_bigger = di[word]
            else:
                di[word] = 1
        return [di, the_bigger]

    # def the_most_common(self):
        
        





my_text = Text('A good book. would, sometimes, cost as much? as a good house.')
test_li_of = my_text.li_of_words()

print(test_li_of)
# for key, value in test_li_of:
#     print(f'{key}: {value}')

# print(my_text.text)
# word_test = my_text.frequency_of_words('as')
# print(word_test)

