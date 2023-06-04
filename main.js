//Шаблоны для экранов
let content = document.getElementById('content');
let main = document.getElementById('main');
let tmpl_entered = document.getElementById('tmpl_entered');
let tmpl_enter = document.getElementById('tmpl_enter');
let tmpl_noNotifications = document.getElementById('tmpl_noNotifications');
let tmpl_notLoad = document.getElementById('tmpl_notLoad');
let tmpl_dashboard = document.getElementById('tmpl_dashboard');
let paper_name = document.getElementById('menu-name');
let tmpl_innerPagePurchase = document.getElementById('tmpl_innerPagePurchase');
let tmpl_inner_page_purchase_table_content = document.getElementById('tmpl_inner_page_purchase_table_content');
let tmpl_inner_page_purchase_addit_costs = document.getElementById('tmpl_inner_page_purchase_addit_costs');
let tmpl_inner_page_attached_docs = document.getElementById('tmpl_inner_page_attached_docs');
let tmpl_portfolio = document.getElementById('tmpl_portfolio');

//Вспомогательные переменные
let PI = '';
let NumberSell = '';

main.innerHTML = tmpl_enter.innerHTML;

//блок для работы с входом
function showPassword() {
    let input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
        document.getElementById('eye-pass').innerHTML = `<img id="password-control" src="img/no-pass.svg" onclick="showPassword()">`;
    } else {
		input.setAttribute('type', 'password');
        document.getElementById('eye-pass').innerHTML = `<img id="password-control" src="img/yes-pass.svg" onclick="showPassword()">`;
	}
	return false;
}

function enter() {

    main.innerHTML = "";
    main.innerHTML += document.getElementById('tmpl_entered').innerHTML;

}


//функция чтобы открыть и спрятать меню
function openMenu() {

    document.getElementById('side-menu').classList.toggle('side-menu-active');
    document.getElementById('content').style.marginLeft = "320px";
    document.getElementById('menu-pic').innerHTML = `<img class="lines" src="img/back.svg" onclick="closeMenu()"/>`;
    document.getElementById('menu-pic').style.marginLeft = "320px";
}

function closeMenu() {

    document.getElementById('side-menu').classList.toggle('side-menu-active');
    document.getElementById('content').style.marginLeft = "0";
    document.getElementById('menu-pic').innerHTML = `<img class="lines" src="img/lines.svg" onclick="openMenu()"/>`;
    document.getElementById('menu-pic').style.marginLeft = "0";

}

function showMore(category) {

    let menuItem = document.getElementById(category);

    if (menuItem.classList.contains('menu-item-active') ) {
        menuItem.classList.toggle('menu-item-active');
        document.getElementById(category.slice(0, -1)).style.backgroundColor = "rgba(255, 255, 255, 1)";
        document.getElementById(category.slice(0, -1)).getElementsByClassName('menu-item-more')[0].classList.remove('rotated');

    } else {
        menuItem.classList.toggle('menu-item-active');
        menuItem.style.backgroundColor = "rgba(241, 240, 251, 1)";
        document.getElementById(category.slice(0, -1)).style.backgroundColor = "rgba(248, 248, 253, 1)";
        document.getElementById(category.slice(0, -1)).getElementsByClassName('menu-item-more')[0].classList.add('rotated');
    }

}


//функции для работы с purchase
function showPurchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('purchase-window-1').classList.toggle('purchase-active');
}

function deletePurchaseInputValue() {
    let classes = document.getElementsByClassName('purchase-input')
    for (let i = 0; i < classes.length; i++) {
        classes[i].value = '';
    }
}

function purchaseContinueStep1() {
    document.getElementById('purchase-window-1').classList.toggle('purchase-active');
    PI = document.getElementById('PI#').value;
    document.getElementById('purchase-window-2').classList.toggle('purchase-active');
}

function purchaseContinueStep2() {
    document.getElementById('purchase-window-2').classList.toggle('purchase-active');
    document.getElementById('purchase-window-3').classList.toggle('purchase-files-active');
}

function backPuchaseStep2() {
    document.getElementById('purchase-window-1').classList.toggle('purchase-active');
    document.getElementById('purchase-window-2').classList.toggle('purchase-active');
}

function backPuchaseStep3() {
    document.getElementById('purchase-window-2').classList.toggle('purchase-active');
    document.getElementById('purchase-window-3').classList.toggle('purchase-files-active');
}

function cancelPuchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('purchase-window-1').classList.toggle('purchase-active');
}

function createPurchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('purchase-window-3').classList.toggle('purchase-files-active');
    let purchaseBunner = document.getElementById('created-purchase-banner');
    purchaseBunner.innerHTML = purchaseBunner.innerHTML.replace('${PI}', PI);
    purchaseBunner.classList.toggle('active-created-purchase-banner');
    document.getElementById("fileListPurchase").innerHTML = '';
    document.getElementById('purchase-window-3').style.height = '509px';
}

function successfullyCreatedPurchaseClose() {
    document.getElementById('created-purchase-banner').classList.toggle('active-created-purchase-banner');
}

function handleFilesPurchase(files) {
    let fileContainer = document.getElementById("fileListPurchase");

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        let blockHeight = document.querySelector('.purchase-files-active').offsetHeight;
        blockHeight += 104;
        document.querySelector('.purchase-files-active').style.height = blockHeight + 'px';
        var fileName = `<div id="fileID` + i + `" class="file">
                            <img class="file-pic" src=""/>
                            <div class="file-name">` +  file.name + `</div>
                            <img class="file-delete-btn" src="" onclick="fileDeletePurchase(`+ i +`)"/>
                        </div>`;
        fileContainer.innerHTML += fileName;
    }
}

function fileDeletePurchase(file_id) {
    document.getElementById('fileID' + file_id).remove();
    let blockHeight = document.querySelector('.purchase-files-active').offsetHeight;
    blockHeight -= 104;
    document.querySelector('.purchase-files-active').style.height = blockHeight + 'px';
}


//функции для работы с sell
function showSell() {
    main.classList.toggle('main-opacity');
    document.getElementById('sell-window-1').classList.toggle('purchase-active');
}

function sellContinueStep1() {
    document.getElementById('sell-window-1').classList.toggle('purchase-active');
    NumberSell = document.getElementById('Number-Sell').value;
    document.getElementById('sell-window-2').classList.toggle('sell-active');
}

function sellContinueStep2() {
    document.getElementById('sell-window-2').classList.toggle('sell-active');
    document.getElementById('sell-window-3').classList.toggle('purchase-files-active');
}

function backSellStep2() {
    document.getElementById('sell-window-1').classList.toggle('purchase-active');
    document.getElementById('sell-window-2').classList.toggle('sell-active');
}

function backSellStep3() {
    document.getElementById('sell-window-2').classList.toggle('purchase-active');
    document.getElementById('sell-window-3').classList.toggle('purchase-files-active');
}

function addSellLoads() {

}

function cancelSell() {
    main.classList.toggle('main-opacity');
    document.getElementById('sell-window-1').classList.toggle('purchase-active');
}

function createSell() {
    main.classList.toggle('main-opacity');
    document.getElementById('sell-window-3').classList.toggle('purchase-files-active');
    let sellBunner = document.getElementById('created-sell-banner');
    sellBunner.innerHTML = sellBunner.innerHTML.replace('${SellNumber}', NumberSell);
    sellBunner.classList.toggle('active-created-purchase-banner');
    document.getElementById('fileListSell').innerHTML = '';
    document.getElementById('sell-window-3').style.height = '509px';
}

function successfullyCreatedSellClose() {
    document.getElementById('created-sell-banner').classList.toggle('active-created-purchase-banner');
}

function handleFilesSell(files) {
    let fileContainer = document.getElementById("fileListSell");

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        let blockHeight = document.getElementById('sell-window-3').offsetHeight;
        blockHeight += 104;
        document.getElementById('sell-window-3').style.height = blockHeight + 'px';
        var fileName = `<div id="SellfileID` + i + `" class="file">
                            <img class="file-pic" src=""/>
                            <div class="file-name">` +  file.name + `</div>
                            <img class="file-delete-btn" src="" onclick="fileDeleteSell(`+ i +`)"/>
                        </div>`;
        fileContainer.innerHTML += fileName;
    }
}

function fileDeleteSell(file_id) {
    document.getElementById('fileID' + file_id).remove();
    let blockHeight = document.querySelector('.purchase-files-active').offsetHeight;
    blockHeight -= 104;
    document.querySelector('.purchase-files-active').style.height = blockHeight + 'px';
}


//функции для кнопок профиля и самого профиля
function showProfile() {
    document.getElementById('profile-more').classList.toggle('profile-more-active');
}

function logOut(){
    main.classList.toggle('main-opacity');
    document.getElementById('profile-more').classList.toggle('profile-more-active');
    document.getElementById('logout').classList.toggle('sure-logout');
}

function cancelLogout() {
    document.getElementById('logout').classList.toggle('sure-logout');
    main.classList.toggle('main-opacity');
}

function away() {
    main.classList.toggle('main-opacity');
    main.innerHTML = tmpl_enter.innerHTML;
    document.getElementById('logout').classList.toggle('sure-logout');
}

function renderMyPortfolio() {
    document.querySelector('.btn-purchase').style.display = 'none';
    document.querySelector('.btn-sell').style.display = 'none';
    document.getElementById('profile-more').classList.toggle('profile-more-active');
    document.getElementById('content').style.padding = '0';
    document.getElementById('content').innerHTML = tmpl_portfolio.innerHTML;
    document.getElementById('menu-name'). innerHTML = "My Portfolio";
}


//функции для работы уведомлений
function showNotifications() {
    main.classList.toggle('main-opacity');
    document.getElementById('notifications').classList.toggle('shown-notifications');
}

function closeNotifications() {
    main.classList.toggle('main-opacity');
    document.getElementById('notifications').classList.toggle('shown-notifications');
}

let deleted_notification_cards = 0;
function deleteNotification(notification_card_id) {
    document.getElementById(notification_card_id).remove();
    deleted_notification_cards++;

    if (deleted_notification_cards == 3) {
        document.getElementById('notifications-card-container').innerHTML += tmpl_noNotifications.innerHTML;
        deleted_notification_cards = 0;
    }
}

//Функции по работе с разделом Dashboard
function renderDashboardPaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_dashboard.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function renderPurchasesPaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_purchases.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Purchases stats overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function innerPagePurchase(row_id) {
    document.querySelector('.btn-purchase').style.display = 'none';
    document.querySelector('.btn-sell').style.display = 'none';

    let row = document.getElementById('row-check-box' + row_id).querySelector('.not-load-row-first-data').innerHTML;
    let row_content = document.getElementById('row-check-box' + row_id).querySelectorAll('.not-load-row-data');

    // Сохраняем исходный шаблон
    let originalTemplate = tmpl_innerPagePurchase.innerHTML;

    // Заменяем местозаполнители в исходном шаблоне значениями из данных
    let modifiedTemplate = originalTemplate.replaceAll('${rowName}', row);
    for (let i = 0; i < row_content.length; i++) {
      modifiedTemplate = modifiedTemplate.replace('${rowContent}', row_content[i].textContent);
    }

    document.getElementById('menu-name').innerHTML += ' - ' + row;

    // Вставляем результат в нужное место на странице
    document.getElementById('content').style.padding = '0';
    document.getElementById('content').innerHTML = modifiedTemplate;
}

function innerPagePurchaseMenu() {
    document.getElementById('inner-page-purchase-info-container').innerHTML = tmpl_inner_page_purchase_table_content.innerHTML
}

function innerPagePurchaseBack() {
    document.getElementById('menu-name').innerHTML = 'Purchases';
    document.querySelector('.btn-purchase').style.display = 'block';
    document.querySelector('.btn-sell').style.display = 'block';
    document.getElementById('content').innerHTML = tmpl_purchases.innerHTML;
    document.getElementById('head-of-load-title').innerHTML = 'Purchases stats overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function innerPagePurchaseSaveandBack() {
    document.querySelector('.btn-purchase').style.display = 'block';
    document.querySelector('.btn-sell').style.display = 'block';
    document.getElementById('content').innerHTML = tmpl_purchases.innerHTML;
    document.getElementById('menu-name').innerHTML = 'Purchases';
    document.getElementById('head-of-load-title').innerHTML = 'Purchases stats overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function innerPageCreateLoad() {
    main.classList.toggle('main-opacity');
    document.getElementById('createLoad').classList.toggle('create-load-active');
}

function CreateLoadBack() {
    main.classList.toggle('main-opacity');
    document.getElementById('createLoad').classList.toggle('create-load-active');
}

function showMoreInrowBtn() {
    document.getElementById('show-more-in-row-btns').classList.toggle('show-more-in-row-btns-active');
}

function editLoad() {
    document.getElementById('show-more-in-row-btns').classList.toggle('show-more-in-row-btns-active');
    main.classList.toggle('main-opacity');
    document.getElementById('edit-load-card').classList.toggle('edit-load-active');
}

function cancelEditLoad() {
    main.classList.toggle('main-opacity');
    document.getElementById('edit-load-card').classList.toggle('edit-load-active');
}

function makeEditLoad() {
    main.classList.toggle('main-opacity');
    document.getElementById('edit-load-card').classList.toggle('edit-load-active');
}

function EditPurchaseBanner() {
    main.classList.toggle('main-opacity');
    document.getElementById('edit-purchase').classList.toggle('edit-purchase-active');
}

function deletePurchaseBanner() {
    main.classList.toggle('main-opacity');
    let rowPI = document.getElementById('inner-page-purchase-info-name').innerHTML;
    document.getElementById('description-sure-delete').textContent = 'The purchase PI#' + rowPI + 'will be deleted permanently';
    document.getElementById('delete-purchase').classList.toggle('sure-delete-purchase');
}

function cancelPurchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('delete-purchase').classList.toggle('sure-delete-purchase');
}

function deletePurchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('delete-purchase').classList.toggle('sure-delete-purchase');
    renderPurchasesPaper('Purchases');
}

function cancelEditPuchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('edit-purchase').classList.toggle('edit-purchase-active');
}

function EditPurchase() {
    main.classList.toggle('main-opacity');
    document.getElementById('edit-purchase').classList.toggle('edit-purchase-active');
}

function innerPageAdditionalCosts() {
    document.getElementById('inner-page-purchase-info-container').innerHTML = tmpl_inner_page_purchase_addit_costs.innerHTML;
}

function addCostCard() {
    main.classList.toggle('main-opacity');
    document.getElementById('addCost').classList.toggle('add-cost-card');
}

function addMoreCosts() {
    document.getElementById('input-cost-container').innerHTML += document.getElementById('tmpl_input_add_cost').innerHTML;
}

function cancelCosts() {
    main.classList.toggle('main-opacity');
    document.getElementById('addCost').classList.toggle('add-cost-card');
}

function innerPageAttachedDocs() {
    document.getElementById('inner-page-purchase-info-container').innerHTML = tmpl_inner_page_attached_docs.innerHTML;
}


//Функции по работе с разделом Load

function renderNotLoadedPaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Not loaded loads overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function renderOnTheWayPaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'On the way loads overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function renderWarehousePaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Warehouse loads overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function renderDeliveredPaper(chapter) {
    document.querySelector('.btn-purchase').style.display = 'inline-block';
    document.querySelector('.btn-sell').style.display = 'inline-block';
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Delivered loads overview';
    document.getElementById('content').style.padding = '40px 48px 40px 128px';
}

function selectRowInLoad() {
    let loadBtns = document.querySelectorAll('.not-load-btn');
    for (let i = 0; i < loadBtns.length; i++) {
        loadBtns[i].style.display = 'none';
    }

    let loadBtnsAfterSelect = document.querySelectorAll('.not-load-btn-select');
    for (let i = 0; i < loadBtnsAfterSelect.length; i++) {
        loadBtnsAfterSelect[i].style.display = 'flex';
    }

    let loadCheckBox = document.querySelectorAll('.load-select-input-check');
    for (let i = 0; i < loadCheckBox.length; i++) {
        loadCheckBox[i].style.display = 'inline-block';
    }

    let loadrows = document.querySelectorAll('.not-load-row-date');
    for (let i = 0; i < loadrows.length; i++) {
        loadrows[i].removeAttribute('onclick');
    }

}

function cancelSelectRowInLoad() {
    let loadBtns = document.querySelectorAll('.not-load-btn');
    for (let i = 0; i < loadBtns.length; i++) {
        loadBtns[i].style.display = 'flex';
    }

    let loadBtnsAfterSelect = document.querySelectorAll('.not-load-btn-select');
    for (let i = 0; i < loadBtnsAfterSelect.length; i++) {
        loadBtnsAfterSelect[i].style.display = 'none';
    }

    let loadCheckBox = document.querySelectorAll('.load-select-input-check');
    for (let i = 0; i < loadCheckBox.length; i++) {
        loadCheckBox[i].style.display = 'none';
    }

    let loadrows = document.querySelectorAll('.not-load-row-date');
    for (let i = 0; i < loadrows.length; i++) {
        loadrows[i].setAttribute('onclick', 'innerPagePurchase(' + i + 1 + ')');
    }
}

function deleteSelectRowInLoadBanner() {
    main.classList.toggle('main-opacity');
    document.getElementById('deleteRow').classList.toggle('sure-delete');
}

function cancelDelete() {
    main.classList.toggle('main-opacity');
    document.getElementById('deleteRow').classList.toggle('sure-delete');
}

function toggleCheckBoxInputAll() {
    let firstInputCheck = document.querySelector('.load-select-input-check');
    let loadCheckBox = document.querySelectorAll('.load-select-input-check');

    if (firstInputCheck.checked) {
        for (let i = 0; i < loadCheckBox.length; i++) {
            loadCheckBox[i].checked = true;
            document.getElementById('select-delete-btn').classList.add('not-load-btn-select-delete-cheked');
            document.getElementById('select-export-btn').classList.add('not-load-btn-select-export-cheked');
        }
    }

    else if (!firstInputCheck.checked) {
        for (let i = 0; i < loadCheckBox.length; i++) {
            loadCheckBox[i].checked = false;
            document.getElementById('select-delete-btn').classList.remove('not-load-btn-select-delete-cheked');
            document.getElementById('select-export-btn').classList.remove('not-load-btn-select-export-cheked');
        }
    }
}

function toggleCheckBoxInput() {

    let checkboxes = document.querySelectorAll('.load-select-input-check');

    if (document.getElementById('select-delete-btn').classList.contains('not-load-btn-select-delete-cheked')) {

        let allUnchecked = [...checkboxes].every((checkbox) => !checkbox.checked);
        if (allUnchecked) {
            document.getElementById('select-delete-btn').classList.remove('not-load-btn-select-delete-cheked');
            document.getElementById('select-export-btn').classList.remove('not-load-btn-select-export-cheked');
        } else {
            return
        }

    } else {

        document.getElementById('select-delete-btn').classList.add('not-load-btn-select-delete-cheked');
        document.getElementById('select-export-btn').classList.add('not-load-btn-select-export-cheked');

    }
}

function deleteSelectRowInLoad() {
    let loadCheckBox = document.querySelectorAll('.load-select-input-check');
    for (let i = 1; i < loadCheckBox.length; i++) {
        if (loadCheckBox[i].checked) {
            loadCheckBox[i].closest('.not-load-row-date').remove();
            document.getElementById('select-delete-btn').classList.remove('not-load-btn-select-delete-cheked');
            document.getElementById('select-export-btn').classList.remove('not-load-btn-select-export-cheked');
        }
    }

    main.classList.toggle('main-opacity');
    document.getElementById('deleteRow').classList.toggle('sure-delete');
}

function filterRowInLoad() {
    main.classList.toggle('main-opacity');
    document.getElementById('filterRow').classList.toggle('filter-card-active');
}

function sortRowInLoad() {
    document.getElementById('sort-by-options').classList.toggle('sort-options');
}

function cancelFilter() {
    main.classList.toggle('main-opacity');
    document.getElementById('filterRow').classList.toggle('filter-card-active');
}