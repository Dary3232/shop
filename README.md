# Описание приложения

**"Shop"** представляет собой интернет-магазин, который предоставляет пользователям возможность просматривать ассортимент товаров, добавлять и удалять их из корзины и избранного, а также осуществлять фильтрацию товаров по различным категориям, таким как цена, цвет, алфавит и другие. Пользователи также могут рассчитывать стоимость товаров в корзине.

# Технологии и инструменты (стек)

Для создания приложения был использован следующий стек технологий:

- **React JS** для разработки SPA;
- **HTML и CSS** для создания структуры и дизайна приложения;
- **Java Script** для создания функционала приложения;
- **React Hooks** для управления состоянием компонентов.

# Описание компонентов (common и UI)

## Общие компоненты для Cart и Shop:

### **Компонент `Header`**

#### **Описание**

Компонент Header представляет собой заголовок приложения, который включает в себя логотип, навигационное меню и иконки для поиска, профиля, избранного и корзины. При клике на иконку корзины осуществляется переход на страницу корзины.

#### **Свойства**

- **setActiveComponent**: Функция для изменения активного компонента. Используется для переключения на страницу корзины при клике на соответствующую иконку.

#### **Используемые контексты** 

- **BasketContext**:
1. **totalQuantity**: Число, представляющее общее количество товаров в корзине.
- **FavoritesContext**
1. **favoritesCount**: Число, представляющее количество добавленных в избранное товаров.

### **Компонент `Content`**

#### **Описание**

Компонент Content отвечает за отображение основной части приложения, включая заголовок, навигационное меню и активный компонент (корзину или магазин). Он использует состояние для управления активным компонентом и оборачивает компонент Shop в провайдер фильтров.

#### **Свойства**

- **setActiveComponent**: функция, которая устанавливает текущий активный компонент. Она передается в качестве пропса из компонента Header.

#### **Методы**

- **renderActiveComponent**: метод, который рендерит текущий активный компонент. Если activeComponent равен 'cart', метод рендерит компонент Cart. В противном случае, он рендерит компонент Shop, обернутый в провайдер контекста FilterProvider.

### Компонент `Footer`

#### **Описание**

Компонент `Footer` представляет собой нижний колонтитул веб-страницы, который содержит информацию о бренде, ссылки на страницы, социальные сети и возможность подписки на рассылку новостей.

### Компонент `App`

#### **Описание**

Компонент `App` является корневым компонентом приложения, который объединяет все основные компоненты и предоставляет контекст для управления данными продуктов.

## Компоненты магазина:

### **Компонент `Shop`**

#### **Описание**

Компонент Shop представляет собой страницу магазина, где пользователи могут просматривать продукты, фильтровать их по критериям и добавлять в корзину или в избранное. 

#### **Используемые контексты**

- **ProductsContext**: используется для получения списка всех продуктов.
- **FilterContext**: используется для получения отсортированных продуктов, функции применения фильтров и состояния кнопки.

#### **Состояние**:

- **activePage**: хранит номер текущей страницы (по умолчанию 0).
- **itemsPerPage**: количество продуктов, отображаемых на одной странице (по умолчанию 12).

### **Компонент `Newsletter`**

#### **Описание**

Компонент `Newsletter` предоставляет пользователям возможность подписаться на рассылку новостей, чтобы быть в курсе акций, предложений и предстоящих коллекций.

### **Компонент `ReviewedProducts`**

#### **Описание**

Компонент ReviewedProducts отображает случайные продукты из контекста ProductsContext, которые были выбраны для показа пользователю. Он извлекает три случайных продукта и отображает их с изображением, названием и ценой.

#### **Контекст**:

- **ProductsContext**: используется для получения списка всех доступных продуктов.

#### **Состояние**:

- **randomProducts**: массив, который хранит три случайно выбранных продукта.

#### **Используемые контексты**

- **ProductsContext**: Предоставляет доступ к списку продуктов.

#### **Состояние**

- **randomProducts**: Состояние, хранящее три случайных продукта, выбранных из общего списка продуктов. Изначально устанавливается как пустой массив.
Методы
- **getRandomProducts**: Функция, которая выбирает случайные продукты из переданного массива. Она создает копию массива продуктов, выбирает случайные элементы и возвращает массив случайных продуктов.
- **useEffect**: Хук, который вызывается при изменении списка продуктов. Он вызывает функцию getRandomProducts, чтобы выбрать три случайных продукта и обновить состояние randomProducts.

### **Компонент `ProductList`**

#### **Описание**

Компонент ProductList принимает массив продуктов и отображает их в виде карточек, используя компонент Product. Он принимает данные о каждом продукте и передает их в дочерний компонент.

#### **Свойства**

- **products (array)**: Массив объектов продуктов, который будет отображаться в списке. 

### **Компонент `Product`**

#### **Описание**

Компонент Product представляет собой элемент продукта, который отображает его изображение, название, цену и возможность добавления в избранное. Он также предоставляет кнопку для покупки продукта.

#### **Свойства**

- **product (object)**: Объект, представляющий продукт. 

#### **Контекст**

- **FavoritesContext**: Используется для управления избранными продуктами, включая функцию toggleFavorite для добавления или удаления продукта из избранного и массив productsInFavorites для проверки, находится ли продукт в избранном.

- **BasketContext**: Используется для управления корзиной, включая функцию addToBasket для добавления продукта в корзину.

### **Компонент `Pagination`**

#### **Описание**

Компонент `Pagination` отвечает за отображение навигации по страницам и управление состоянием активной страницы. Он позволяет пользователю перемещаться между страницами, отображая номера страниц и стрелки для навигации.

#### **Свойства**

- **activePage**: Индекс текущей активной страницы (начиная с 0).
- **setActivePage**: Функция, используемая для обновления активной страницы. Принимает новое значение индекса страницы.
- **pageCount**: Общее количество страниц.

### **Компонент `SortFilter`**

#### **Описание**

Компонент SortFilter предоставляет интерфейс для сортировки списка элементов. Он позволяет пользователю выбрать способ сортировки из выпадающего списка. Сортировка может быть по умолчанию, по возрастанию (ASC) или по убыванию (DESC).

#### **Используемые контексты**

- **FilterContext**: Компонент использует контекст для получения функции updateFilter.

#### **Функциональность**

- **handleSortChange**:  Эта функция вызывается при изменении значения в выпадающем списке. Она обновляет фильтр сортировки, передавая выбранное значение в функцию updateFilter.

### **Компонент `SearchFilter`**

#### **Описание**

Компонент SearchFilter предназначен для реализации функциональности поиска в приложении. Он позволяет пользователям вводить текст для фильтрации элементов, таких как товары или посты. Компонент использует контекст для управления состоянием поискового запроса.

#### **Используемые контексты**

- **FilterContext**: Компонент использует контекст для получения функции updateFilter.

#### **Функциональность**

- **handleSearchChange**: Эта функция вызывается при изменении значения в текстовом поле. Она обновляет фильтр поиска, передавая введенное значение в функцию updateFilter.

### **Компонент `PriceFilter`**

#### **Описание**

Компонент PriceFilter позволяет пользователям задавать минимальную и максимальную цену для фильтрации элементов. Он включает два текстовых поля для ввода цен и обновляет состояние фильтров через контекст. Компонент также обрабатывает случаи, когда введенные значения являются отрицательными.

#### **Используемые контексты**

- **FilterContext**: Компонент использует контекст для получения функции updateFilter.

#### **Функциональность**

- **handleMinPriceChange**: Эта функция вызывается при изменении значения в поле ввода минимальной цены. Если введенное значение отрицательное, фильтр сбрасывается и пользователю показывается предупреждение. В противном случае обновляется минимальная цена.

- **handleMaxPriceChange**: Эта функция аналогична handleMinPriceChange, но для поля максимальной цены.

### **Компонент `ColorsFilter`**

#### **Описание**

Компонент ColorsFilter предоставляет функциональность фильтрации элементов по цвету. Он позволяет пользователям выбирать один или несколько цветов из предустановленного списка и обновляет состояние выбранных цветов в приложении. Компонент использует контекст для управления состоянием цветов.

#### **Используемые контексты**

- **FilterContext**: Компонент использует контекст для получения функции updateFilter.

#### **Функциональность**

* **handleColorChange**: Эта функция вызывается при изменении состояния чекбокса. Если чекбокс отмечен, цвет добавляется в массив выбранных цветов. Если чекбокс снят, цвет удаляется из массива. Затем обновляется состояние фильтров через функцию updateFilter.

### **Компонент `CategoriesFilter`**

#### **Описание**

Компонент CategoriesFilter предоставляет пользователям возможность фильтровать товары по категориям. Он отображает список категорий, из которых пользователь может выбрать одну. При выборе категории компонент обновляет состояние выбранной категории в приложении с помощью контекста.

#### **Используемые контексты**

- **FilterContext**: Компонент использует контекст для получения функции updateFilter.

#### **Функциональность**

- **handleCategoryClick**: Эта функция вызывается при клике на категорию. Она обновляет состояние фильтров, устанавливая выбранную категорию через функцию updateFilter.


## Компоненты корзины:

### **Компонент `Cart`**

#### **Описание**

Компонент Cart представляет собой основное представление корзины покупок в приложении. Он объединяет список продуктов, информацию о заказе и возможность ввода промокода.

### **Компонент `Product`**

#### **Описание**

Компонент Product представляет собой элемент продукта в корзине покупок. Он отображает информацию о продукте, такую как изображение, название, цена, количество и предоставляет функциональность для изменения количества и удаления продукта из корзины.

#### **Свойства**

- **product**: Объект, представляющий продукт. 
- **onRemove**: Функция, вызываемая при удалении продукта из корзины. 
- **onQuantityChange**: Функция, вызываемая при изменении количества продукта. 

### **Компонент `ProductList`**

#### **Описание**

Компонент ProductList отвечает за отображение списка продуктов, находящихся в корзине покупок. Он извлекает данные о продуктах из контекста BasketContext и отображает каждый продукт с помощью компонента Product. Также предоставляет функциональность для изменения количества продуктов и их удаления из корзины.

#### **Используемые контексты**

- **BasketContext**: Используется для доступа к productsInBasket, updateBasket и removeFromBasket.

#### **Функциональность**

- **handleQuantityChange**: Функция для изменения количества продукта.

### **Компонент `Order`**

#### Описание

Компонент Order отвечает за отображение информации о заказе в корзине покупок. Он вычисляет итоговую стоимость заказа, включая цену товаров, стоимость доставки и примененные скидки. Также предоставляет кнопку для оформления заказа.

#### **Используемые контексты**

- **BasketContext**: Компонент использует контекст для доступа к данным о продуктах в корзине и информации о примененных скидках.

#### **Функциональность** 

- **orderPrice**: Вычисляет общую стоимость товаров в корзине, умножая цену каждого товара на его количество и суммируя результаты.
- **deliveryPrice**: Определяет стоимость доставки. 
- **totalPrice**: Вычисляет общую стоимость заказа, включая цену товаров, стоимость доставки и примененные скидки. 
- **handleCheckoutClick**: Функция, вызываемая при нажатии кнопки "Checkout". Проверяет, пуста ли корзина. Если корзина пуста, выводит предупреждение. В противном случае, выводит сообщение об успешном оформлении заказа с указанием общей стоимости.

### **Компонент PromoCodeWrapper**

#### **Описание**

Компонент PromoCodeWrapper отвечает за ввод и применение промокода для получения скидки. Он позволяет пользователю ввести промокод и применить его, проверяя его корректность. Если промокод правильный, применяется скидка, если нет — выводится сообщение об ошибке.

#### **Используемые контексты**

- **BasketContext**: Используется для доступа к функции setDiscountApplied для обновления состояния скидки.

#### **Состояния**

- **promoCode**: Состояние, содержащее текст, введенный пользователем в поле для ввода промокода.

#### **Функциональность**

- **handlePromoCodeChange**: Функция, которая обновляет состояние promoCode при изменении значения в поле ввода.
- **applyPromoCode**: Функция, вызываемая при нажатии кнопки для применения промокода.


# Константы

## **`PRODUCT_IN_BASKET_KEY`**

### **Описание**

Константа `PRODUCT_IN_BASKET_KEY` используется в качестве ключа для хранения информации о продуктах, добавленных в корзину.

### **Применение**

- Сохранение списка товаров в локальном хранилище (localStorage).
- Обновлениe состояния корзины.
- Получениe данных о продуктах в корзине при загрузке приложения.

## **`PRODUCT_IN_FAVORITES_KEY`**

### **Описание**

Константа `PRODUCT_IN_FAVORITES_KEY` используется в качестве ключа для хранения информации о продуктах, добавленных в избранное.

### **Применение**

- Сохранениe списка избранных товаров в локальном хранилище (localStorage).
- Обновлениe состояния избранных товаров.
- Получениe данных о продуктах в избранном при загрузке приложения.

# Контекст

## **Контекст `FilterContext`**

### **Описание**

FilterContext предоставляет контекст для управления фильтрацией и сортировкой продуктов в приложении. Он позволяет компонентам делиться состоянием фильтров и обновлять его по мере необходимости.

### **Состояния**

- **filters**: Объект, содержащий текущие фильтры.
- **sortedProducts**: Список продуктов, отсортированных в соответствии с установленными фильтрами.
- **filteredByCategoryAndPriceAndColors**: Список продуктов, отфильтрованных по категории, цене и цветам.
- **isButtonDisabled**: Указывает, должна ли кнопка применения фильтров быть отключена.

### **Методы**

- **applyAllFilters**: Применяет все активные фильтры к списку продуктов и обновляет состояния filteredByCategoryAndPriceAndColors и sortedProducts. Вызывается для фильтрации и сортировки продуктов на основе текущих фильтров.
- **filterAndSortProducts**: Функция, которая фильтрует и сортирует продукты на основе поискового термина и выбранной сортировки. Использует useCallback для оптимизации производительности.
- **updateFilter**: Обновляет состояние фильтров на основе новых значений и активирует кнопку применения фильтров, если выбраны какие-либо параметры.

### **Эффекты**

- **useEffect**: Используется для повторного применения фильтров и сортировки при изменении состояния filteredByCategoryAndPriceAndColors.

## **Контекст `ProductsContext`**

ProductsContext предоставляет контекст для управления списком продуктов в приложении. Он позволяет компонентам получать доступ к данным о продуктах, не передавая их через пропсы на каждом уровне иерархии компонентов.

### **Описание**

- **createContext**: Используется для создания нового контекста.
- **Данные о продуктах**: Импортируются из файла products.json, который содержит массив объектов продуктов.

## **Контекст `FavoritesContext`**

### **Описание**

FavoritesContext предоставляет контекст для управления списком избранных продуктов в приложении. Он позволяет компонентам добавлять или удалять продукты из избранного и сохранять состояние избранных продуктов в локальном хранилище.

### **Состояния** 

- **productsInFavorites**: Массив объектов, представляющих продукты, добавленные в избранное. 
- **favoritesCount**: Число продуктов в избранном. Это значение обновляется автоматически при добавлении или удалении продукта из избранного.

### **Методы**

- **toggleFavorite(product)**: Функция для добавления или удаления продукта из избранного.

## **Контекст `BasketContext`**

### **Описание**

BasketContext предоставляет контекст для управления корзиной покупок в приложении. Он позволяет компонентам добавлять, удалять и обновлять продукты в корзине, а также сохранять состояние корзины в локальном хранилище.

### **Состояния**

- **productsInBasket**: Массив объектов, представляющих продукты, добавленные в корзину. Инициализируется данными из локального хранилища.
- **discountApplied**: Логическое значение, указывающее, был ли применён скидка. Изначально установлено в false.

### **Фунцкиональность**

- **addToBasket**: Метод для обновления состояния productsInBasket и сохранения его в локальное хранилище. Принимает массив обновленных продуктов.
- **updateBasket**: Функция для обновления корзины с новым массивом продуктов.
- **removeFromBasket**: Функция для удаления продукта из корзины по его идентификатору.
- **totalQuantity**:  Вычисляемое значение, представляющее общее количество продуктов в корзине.

# Пользовательские хуки

## **Хук `useLocalStorage`**

### Описание

Хук, который предоставляет методы для работы с локальным хранилищем.

### **Методы**

- **setLocalStorage(key, value)**: Сохраняет значение в локальном хранилище под указанным ключом. Преобразует значение в строку JSON.
- **getLocalStorage(key)**: Возвращает значение из локального хранилища, преобразованное из строки JSON обратно в объект.
- **clearLocalStorage(key)**: Удаляет элемент из локального хранилища по указанному ключу.

# Логика работы приложения

Логика в приложении "Shop" функционал реализована с использованием следующих подходов:

1. Управление состоянием через контексты.
   Используются контексты FilterContext и ProductsContext, чтобы компоненты могли получать нужные данные без передачи пропсов. Это делает код более понятным и упрощает разработку.

2. Пользовательские хуки.
   Пользовательские хуки помогают переиспользовать логику состояния в разных компонентах. Это делает код более модульным и легким для чтения.

3. Компонентый подход.
   Разбивая приложение на компоненты улучшается читабельность кода, упрощается управление и это оптимизирует приложение.

4. Сохранение состояния в локальном хранилище.
   Сохранение состояния в локальном хранилище позволяет пользователям сохранить данные о товарах между сессиями.
