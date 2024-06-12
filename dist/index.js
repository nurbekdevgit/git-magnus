System.register("type", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data", [], function (exports_2, context_2) {
    "use strict";
    var categories, products;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("categories", categories = [
                {
                    id: 1,
                    name: "Un mahsulotlari",
                    image: "https://daryo.uz/cache/2022/05/photo_2021-11-22_12-41-32-1280x853.jpg",
                },
                {
                    id: 2,
                    name: "Ichimliklar",
                    image: "https://storage.kun.uz/source/4/7HCigwIhV3M9B8GGLoEh83b4RaVNBrt5.jpg",
                },
                {
                    id: 3,
                    name: "Sabzavotlar",
                    image: "https://i0.wp.com/medall.uz/wp-content/uploads/2023/02/IMG_20230227_103850_093.jpg?fit=600%2C435&ssl=1",
                },
                {
                    id: 4,
                    name: "Mevalar",
                    image: "https://daryo.uz/static/2021/03/tmb_16420_6866.jpg",
                },
            ]);
            exports_2("products", products = [
                {
                    id: 1,
                    categoryId: 1,
                    status: "Active",
                    name: "Birinchi navli un",
                    price: 4000,
                    image: "https://api.cabinet.smart-market.uz/uploads/images/ff808181eb253f52192ca568",
                },
                {
                    id: 2,
                    categoryId: 1,
                    status: "Active",
                    name: "Birinchi navli un (Vitaminga boy)",
                    price: 4600,
                    image: "https://api.cabinet.smart-market.uz/uploads/images/ff808181b460e76d191cff62",
                },
                {
                    id: 3,
                    categoryId: 2,
                    status: "Active",
                    name: "Dinay",
                    price: 12000,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoOzQXMIifDMB448sybzS8AwoLysshsMqlKNqzTQigxFTIuJrcjcNCRe8Bgtph7ggFY4&usqp=CAU",
                },
                {
                    id: 4,
                    categoryId: 2,
                    status: "Active",
                    name: "Dena",
                    price: 13000,
                    image: "https://marwin.uz/uploads/Q80QjrF6IQ.png",
                },
                {
                    id: 5,
                    categoryId: 3,
                    status: "Active",
                    name: "Kartoshka",
                    price: 2000,
                    image: "https://odam.uz/upload/media/entries/2019-12/27/2320-entry-5-1577471814.jpg",
                },
                {
                    id: 6,
                    categoryId: 3,
                    status: "Active",
                    name: "Sabzi",
                    price: 1500,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAfBtqA7GekF1EZ0IsW_NSp_RiRZn_7H4Dw&s",
                },
                {
                    id: 7,
                    categoryId: 3,
                    status: "Active",
                    name: "Piyoz",
                    price: 1800,
                    image: "https://www.jizzaxstat.uz/images/13092022-2.jpg",
                },
                {
                    id: 8,
                    categoryId: 3,
                    status: "Active",
                    name: "Pamidor",
                    price: 3000,
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
                },
                {
                    id: 9,
                    categoryId: 4,
                    status: "Active",
                    name: "Olma",
                    price: 5000,
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
                },
                {
                    id: 10,
                    categoryId: 4,
                    status: "Active",
                    name: "Banan",
                    price: 8000,
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
                },
                {
                    id: 11,
                    categoryId: 4,
                    status: "Active",
                    name: "Uzum",
                    price: 7000,
                    image: "https://dostavo4ka.uz/upload-file/2021/05/05/2015/b387db2b-fa91-4a3a-8f19-50ab5d2c2e9e.jpg",
                },
                {
                    id: 12,
                    categoryId: 4,
                    status: "Active",
                    name: "Anor",
                    price: 6000,
                    image: "https://gardencells.com/files/original/products/68.jpg",
                },
                {
                    id: 13,
                    categoryId: 1,
                    status: "Active",
                    name: "Ikkinchi navli un",
                    price: 3500,
                    image: "https://img02.flagma.uz/photo/premium-un-1935225_big.jpg",
                },
                {
                    id: 14,
                    categoryId: 1,
                    status: "Active",
                    name: "Guruch",
                    price: 5000,
                    image: "https://xalq-tabobati.uz/wp-content/uploads/2020/07/riso.jpg",
                },
                {
                    id: 15,
                    categoryId: 2,
                    status: "Active",
                    name: "Pepsi",
                    price: 9000,
                    image: "https://images.uzum.uz/cia47ib6edfostihhq40/original.jpg",
                },
                {
                    id: 16,
                    categoryId: 2,
                    status: "Inactive",
                    name: "Fanta",
                    price: 8500,
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Fanta-logo.jpg",
                },
                {
                    id: 17,
                    categoryId: 3,
                    status: "Active",
                    name: "Qovoq",
                    price: 2500,
                    image: "https://daryo.uz/static/2023/09/medium-650d61df752f1.jpg",
                },
                {
                    id: 18,
                    categoryId: 4,
                    status: "Inactive",
                    name: "Shaftoli",
                    price: 7500,
                    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Peach_2.jpg",
                },
                {
                    id: 19,
                    categoryId: 4,
                    status: "Inactive",
                    name: "Nok",
                    price: 6500,
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pear_close-up.jpg",
                },
                {
                    id: 20,
                    categoryId: 4,
                    status: "Active",
                    name: "Gilos",
                    price: 9000,
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
                },
            ]);
        }
    };
});
System.register("modal", [], function (exports_3, context_3) {
    "use strict";
    var productModal;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            // @ts-ignore
            exports_3("productModal", productModal = new bootstrap.Modal("#productModal", {
                keyboard: false,
            }));
        }
    };
});
System.register("test", [], function (exports_4, context_4) {
    "use strict";
    var UserClass, nurbek;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            UserClass = /** @class */ (function () {
                function UserClass(id, name, image, status) {
                    this.id = id;
                    this.name = name;
                    this.image = image;
                    this.status = status;
                }
                return UserClass;
            }());
            // Create a new User object
            nurbek = [
                new UserClass(1, 'Nurbek', 'https://example.com/avatar.jpg', 'Active'),
                new UserClass(1, 'Nurbek', 'https://example.com/avatar.jpg', 'Active'),
                new UserClass(1, 'Nurbek', 'https://example.com/avatar.jpg', 'Active')
            ];
        }
    };
});
System.register("index", ["data", "modal"], function (exports_5, context_5) {
    "use strict";
    var data_1, modal_1, categoriesContainer, productsContainer, selectedCategory, renderCategories, renderProducts;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            }
        ],
        execute: function () {
            categoriesContainer = document.querySelector("#categories");
            productsContainer = document.querySelector("#products");
            selectedCategory = data_1.categories[0];
            renderCategories = function () {
                if (!categoriesContainer) {
                    console.error("categoriesContainer topilmadi");
                    return;
                }
                categoriesContainer.innerHTML = "";
                data_1.categories.map(function (category) {
                    var col = document.createElement("div");
                    col.className = "col-4 mb-2";
                    col.style.cursor = "pointer";
                    col.innerHTML = "\n        <img src=\"".concat(category.image, "\" alt=\"\" class=\"w-100 rounded\">\n        <p class=\"fw-bold\">").concat(category.name, "</p>\n    ");
                    col.addEventListener("click", function () {
                        selectedCategory = category;
                        renderProducts();
                    });
                    categoriesContainer.appendChild(col);
                });
            };
            renderProducts = function () {
                if (!productsContainer) {
                    console.error("productsContainer topilmadi");
                    return;
                }
                productsContainer.innerHTML = "";
                var filteredProducts = data_1.products.filter(function (p) { return p.status == "Active" && selectedCategory.id == p.categoryId; });
                filteredProducts.map(function (p) {
                    var productItem = document.createElement("div");
                    productItem.className = "product-item d-flex align-items-center gap-3 mb-3";
                    productItem.innerHTML = "\n       <img\n          src=\"".concat(p.image, "\"\n          alt=\"\"\n          width=\"100\"\n          height=\"80\"\n          class=\"object-fit-cover rounded\"\n        />\n        <div class=\"\" style=\"flex: 1\">\n          <p class=\"fw-bold mb-1\">").concat(p.name, "</p>\n          <p class=\"mb-0\">").concat(p.price, " so'm</p>\n        </div>\n    ");
                    var btn = document.createElement("button");
                    btn.className = "btn";
                    btn.innerHTML = "<i class=\"fas fa-shopping-cart\"></i>";
                    btn.addEventListener("click", function () {
                        console.log("showProductModal");
                        modal_1.productModal.show();
                    });
                    productItem.appendChild(btn);
                    productsContainer.appendChild(productItem);
                });
            };
            window.onload = function () {
                renderCategories();
                renderProducts();
            };
        }
    };
});
