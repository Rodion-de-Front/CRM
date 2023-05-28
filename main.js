//Шаблоны для экранов
let content = document.getElementById('content');
let main = document.getElementById('main');
let tmpl_entered = document.getElementById('tmpl_entered');
let tmpl_enter = document.getElementById('tmpl_enter');
let tmpl_noNotifications = document.getElementById('tmpl_noNotifications');
let tmpl_notLoad = document.getElementById('tmpl_notLoad');
let tmpl_dashboard = document.getElementById('tmpl_dashboard');
let paper_name = document.getElementById('menu-name');

//Вспомогательные переменные
let PI = '';
let NumberSell = '';


//блок для работы с входом
function showPassword() {
    let input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
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
    document.getElementById('menu-pic').innerHTML = `<img class="lines" src="img/back.png" onclick="closeMenu()"/>`;
    document.getElementById('menu-pic').style.marginLeft = "320px";
}

function closeMenu() {

    document.getElementById('side-menu').classList.toggle('side-menu-active');
    document.getElementById('content').style.marginLeft = "0";
    document.getElementById('menu-pic').innerHTML = `<img class="lines" src="img/lines.png" onclick="openMenu()"/>`;
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

function deleteSellInputValue() {
    let classes = document.getElementsByClassName('purchase-input')
    for (let i = 0; i < classes.length; i++) {
        classes[i].value = '';
    }
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
    document.getElementById('content').innerHTML = tmpl_dashboard.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
}


//Функции по работе с разделом Load

function renderNotLoadedPaper(chapter) {
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Not loaded loads overview';
}

function renderOnTheWayPaper(chapter) {
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'On the way loads overview';
}

function renderWarehousePaper(chapter) {
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Warehouse loads overview';
}

function renderDeliveredPaper(chapter) {
    document.getElementById('content').innerHTML = tmpl_notLoad.innerHTML;
    document.getElementById('menu-name').innerHTML = chapter;
    document.getElementById('head-of-load-title').innerHTML = 'Delivered loads overview';
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

function cancelFilter() {
    main.classList.toggle('main-opacity');
    document.getElementById('filterRow').classList.toggle('filter-card-active');
}