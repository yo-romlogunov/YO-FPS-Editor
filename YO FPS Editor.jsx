/********************************************************************
romlogunov - t.me/romlogunov_hub
********************************************************************/
// Полифилл для Array.prototype.indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = fromIndex | 0;
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}

function buildUI(thisObj) {
    // Определяем, запускается ли скрипт как панель или как окно
    var pal = (thisObj instanceof Panel)
        ? thisObj
        : new Window("palette", "YO FPS Editor 2.7", undefined, { resizeable: false }); // Изменено: resizeable установлено в false
    
    pal.text = "YO FPS Editor 2.7";
    pal.orientation = "column";
    pal.alignChildren = ["fill","top"];
    pal.spacing = 15; 
    pal.margins = 10; 

    // Установка фиксированного размера панели
    pal.preferredSize = [500, 600]; // Измените значения по необходимости
    pal.minimumSize = pal.preferredSize; // Изменено: Минимальный размер равен предпочтительному
    pal.maximumSize = pal.preferredSize; // Изменено: Максимальный размер равен предпочтительному
    
    // -------------------------------------------------------------------------
    // ABOUT_GROUP
    // ===========
    var About_group = pal.add("group", undefined, {name: "About_group"}); 
        About_group.orientation = "row"; 
        About_group.alignChildren = ["center","fill"]; 
        About_group.spacing = 234; 
        About_group.margins = 0; 

    var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%87%00%00%00%19%08%06%00%00%00%1B%C2%8B%3D9%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%05%C3%A8IDATx%01%C3%ADZMN%C3%A3J%10%C2%AE%C2%84%08%09%04%1A%C2%9EX%C2%B0%60%C2%81%C3%99%20%C2%B1%02N%C3%B0%C2%92%13%0C%C2%9C%60%C3%82%09%26%2C%11B%C2%80X%C2%B0%C2%849A%C3%82%09%C2%80%13%24s%02%C3%B2V%08X%C2%8CA%20%C3%82%26%13%C3%84%C2%9F%40%C3%BC%C2%BC%C3%BA%C3%A2j%C3%A88%C3%AD%C2%B8%C2%83%09%C2%834%C3%BE%C2%A4%C3%82q%C2%BB%C2%BA%C3%9C%C3%AE%C3%BE%C2%BA%C2%BA%C2%BA%1A%C2%A2%181b%C3%84%C2%88%11%23F%C2%8C%C3%8E%23a*%3C%3C%3CL%3F%3F%3F%7FcI%C3%B3%C2%AD%23%C3%85%C3%A5D%22Q%C2%AEV%C2%AB%C3%84%C2%82%C3%A7%2F%C3%A5%C2%90J%C2%A5Bggg%0D%C3%A5%C3%90%C3%A7%C3%BB%C2%9D%C3%85%C3%85%C3%85m%C3%BA%C3%A4%C3%A0v%0E%C3%A0%C3%8Am%C2%AEQ%C2%8C%3A%1A%C3%88%C2%B1%C2%B7%C2%B7%C3%A7tuu%C3%A5%C2%85%14%C2%81xxx%C2%A0%C2%93%C2%93%C2%93%C3%BAU%C3%87%C3%BD%C3%BD%3D%1D%1C%1C%C3%94%C2%AF%0D%2FI%24%5C%C2%B6%C2%9B%C2%99%C2%9F%C2%9Fw)%04%C3%BC%C3%AE%1C_%C2%BE%C2%87%C3%A9%C2%B1%C3%8DQ%0B%7D%C2%97e%C2%93u%0B%01%C3%AFJ%C3%B3e%C2%89e%C2%92e%40%C2%ABSbYA%C2%BB%C3%89%02l%C3%A7W%C2%88%C3%8A%0E%C3%9B%C3%8A%C2%91%C2%9D%C2%AD%0D%C2%BE%7Ca%C3%BDY%C2%AD%2C%C2%8F6r%C3%99%14%7D%20%5E%C3%88%C3%81%C2%83%3A%C3%89%C2%8D(%C3%92k'%C2%B5%C3%84%C3%93%C3%93%13%C2%9D%C2%9E%C2%9E%C3%92%C3%9D%C3%9D%5DC%C3%B9%C3%A3%C3%A3c%C2%9D%20%C2%B7%C2%B7%C2%B7%C3%BE*%C2%B5d2%C2%99YXX(%C2%B7%C2%B2%C3%8BmX%26o%C3%80Z7%C2%9C%C3%91%C2%86%C2%BE%C3%8B2%C2%A5%7B%05%C2%AE%07Bm%C2%84%C3%94%C2%99%C2%81%C3%B7%C2%A3%10%C2%B0%C2%ADg%C2%BE%14X~%06%C3%99b%3B%25%C2%B2%00%C2%9B*%C3%B0e%C2%84%C3%B53!e%0E_0%5E%19%5B%12%C2%B7%C2%8B%14%C3%BE%C3%80c%C2%B4C%0C%C2%80%07%C2%9A%C2%86%C2%87%C2%87%C3%A9%C3%B8%C3%B8%C2%B8%C3%81%C2%83%C2%B0%C2%87%C2%A0%C2%B1%C2%B11%C3%98%C3%B4%7B%C2%90%01%26Tqmmm%C3%8A%C3%86%C2%83%080%C3%9B.%C3%88%1E%C2%BA%3E%C2%BE%05%04pD%C3%96Y%C3%AA%C2%B3Q%3AV%11%03%C2%84%C3%B9A%C2%9E%C2%B7%00%C2%B2%2C%C3%9F%C2%A4%C3%8E%16%C3%8B(%C3%99%C3%A1g%C2%90%C2%87%C2%8A%0A%C2%B6%C2%9B%0Dx%C3%A4P%07Q'%07%0Ft%5B%C3%84P%00A%C2%86%C2%86%C2%86%C3%AA%1ED%07%08222%C2%82%C3%98%C3%85_e%C2%80%C2%89%04%17%C2%99!%3B%C3%AC%C2%B49%2B%1A%C3%B4e%C3%86%C3%AD%C2%92%C3%97%C2%89Y%C2%BE%C2%9F%13%C3%AF1%C2%AD%C3%95%C2%99%C3%B3%0Dj%C2%89%C3%B5%60%03%C3%9E%08%C2%93f%C3%92%C3%86%7B%C2%BC%05%12%C3%A7L%C3%8Am9(%C3%9E%C3%B1%C3%87CBnG%1E%3B%C2%9E%C3%A3%C2%A2%C2%9A%C2%A9%C2%BE%C2%AE%1B%C3%A4%C2%BDt%C3%BB%C3%B2%3B%C2%8D%C3%B6%24%C3%B7%C3%B7%C3%B7%C2%A7)%02%03%7Bzz%C3%AA%C3%A2G%7F%7F%3F%C3%B5%C3%B5%C3%B5%C2%99%C2%AA%C2%A4WWW%C3%93%C3%B4%01%C2%90%C3%8E%C3%9A%C3%91%C2%8A%1C%C2%B9%C3%AA%13%C3%814%20%05%C3%B2%08%0Cq%C2%A9%03%C3%A0A%C2%80'%C3%BBM%C2%9Ew%C2%82%C3%AC%C2%82%C2%88%01%C3%AA%1B%C2%A2%C2%A3P%14Q%C2%BF%11%C3%B3%C3%A4%7C%C3%B6%C3%95j%C2%80g%C2%98%C2%90%5B%C2%88%C2%8DX%C2%B2%01%C3%B6%C3%97e%C2%A9Um%C3%8A%C2%A6%C2%B8%03%C2%BF%0A%C3%B3%C3%9E%0C%10%C3%81%10c%C3%90%C3%A0%C3%A0%20%5D%5D%5D5%C2%95%C3%B3%3B%C3%A1%C2%B6K%C3%B41%C3%90%07_%0F%3A%15%C3%90)%C2%AE%C3%AE%1D%C3%84%C3%BB%C2%B8%C3%94!%0810)3j6Kp%C2%9C%C2%B7y%2F%C2%82q%C3%B1%08%18%C3%B8Q%C2%BFw%C3%95%C3%A2%11%C3%84%40%C3%BFh%1E%07%04%C3%8A%23F%C3%A2%C2%B2M%C2%9FY%C2%B4%07%C3%A4%C2%9CR%7D%C2%91%C2%A2W%C2%B7%C3%B6f%C3%B4%C3%B6%C3%B6%1A%C3%8BA%C2%9A%00%C2%A4%C3%89%0E%188%C3%93%C3%8C%C3%9E%C2%B4%0D%C3%B0%C3%88%C2%8B%1F%14%C3%AA%1F%C2%8DeDf%09%C2%BE%C3%9D!o%C3%96%C2%BA%C3%A4%11%16%1D%C2%BA%C3%9D%C2%A9-%C2%AD%0C%1C%06iF%C3%BF%06%C3%BC%C3%86%C2%B2G%C3%9E%C2%A0%C2%96(%1A%C2%96%C3%84fV%2F%C3%A4%C3%BB%0DY6p%C3%9D1%7C%C3%A3%C2%8CN%C2%B4d%0BWf%C2%8DT*e%2C%C3%AF%C3%AE%C3%AE6%C2%96k%C2%B9%C2%900%C2%80%C3%8DY%C2%838%01%C3%BA%C3%98q%C2%A5E%C2%A6%C3%85%C2%AD*%C3%9D%C2%82%C2%AF3%C2%B0d%C3%BC%C3%90%C3%AE%1D%C2%B1%C2%8D%C3%99%C3%BB%C2%9B%C3%AB%C2%86%C3%AE%C2%98%7C%C2%A8%C3%8F%C3%88%008%C2%9A%5E%C2%96%C2%BC%C3%B8b%C3%9Bo%40%C3%88%C3%B2%1E%C3%B1M%C2%96e%25%C3%A0%19%C2%96%10%3D%C3%96Q(%C3%BB%3DP%C2%8A%3E7%C3%90%C2%81%C2%A6%19%C3%AC%06%C3%A8o%05%C2%94C%C2%BF%C2%A1%C2%B3%C2%84(9%C3%99%0A%C2%A7%C3%89%23%C3%A2%C2%BF%C3%B4J%C2%A6e%0C%C2%AA%C2%9Eo%08%C3%81%C2%9C%C2%B4%C2%B7%09%C2%BEN%C2%9F%609%C2%A2%60%C3%BC%C3%872Bo%C2%84%C2%96%C2%A3*%07%C2%B4%05A'%C2%9EA%C2%AFD-%00r%C2%B8%14qK%C3%A4%C3%8Fu(%C2%98%C3%A2%10%C2%81%C3%AD%C3%AC%C2%98%C2%8B%C2%B0%C2%87%C2%AF%C2%89%60m%C3%9D%08Z%26%C2%A4%7C%5B%C2%84%C3%84%C2%93%C2%82d%0Ey%3B%1C%C3%9B%25%C2%ACf%C3%99V%C3%8CZ%1B%C2%BDH%08%C3%99aY-%C2%99%20%07%C3%96X%C2%87%22%20%C2%88%1C777%C3%86%C3%B2Nm%0D%C3%89%10%C2%9C%C2%99%C2%80%25%C2%87d%C2%90%C3%BC%03%2F)%7Fx%01%C3%A5%C2%85%40%C2%96%12%C2%BD%1F%C2%8EB%C2%9E%7F%C2%A1hx%C3%99%C3%AE%C2%B6%C3%A8%0B%C2%AB%C2%B4E%C2%92%13S%05%C2%8A%C2%88%C3%AB%C3%ABkcy%C2%ADf%26(%C2%82!%C3%BA%C2%B3%C3%80nAm%C3%AFL%1De%C3%95yo%C2%84K%C2%AD%03%C3%B2%C2%A81%C2%A0K%1EA%C3%92%C2%A6%C2%87%12%C3%BF%C3%A0%1D%C2%A1%1349%3E%3E%5Ej%23%C3%B2o%02%C2%B2%C2%A3%26r%20%3Bzq%C3%91%C2%9C%C3%9C%04%C2%9B%3F%C3%81A%C2%9C%C3%9A%C3%86%C2%81%04E%09%60%1D%11%04%C2%A2%C3%AB%C2%9A%C3%AE%7B%C2%B7%C2%B5%40%5E%C3%A2j%C3%9A%C3%BF%40r%10%C2%91%C2%88)%C3%8B%24%C2%BE%C3%AF%7B%00%C3%B1%C2%B1%7BsM%01%C2%B1%1F%C3%B5%C2%80%C2%94%C3%8FCf9%C3%9B%C2%B9%C3%9Bn%C3%83p%C2%BE%C2%82%038%3F%C3%94%C3%B9%C2%8A%015%1C%C3%80%C3%91%C2%9F%07%22%C3%B6%C2%AF%C3%A4%C3%8D%20H1%40o%C2%A5%C2%8D%C2%98%C3%87y%0E%3E%C2%B0%C2%AC%C2%A9%C2%A5%14%C3%B6X%0F%C2%BB%C2%A4%3C%06Oeg%C2%A5.%C2%B6%C3%97%184%C2%87B%20v%40%C2%84%25%C2%B1%C2%A7%C3%87%3C%C3%8B%C3%A4e%C2%86%C3%B3%C2%92%15v%C2%85(%20~%C2%8Ee%C2%86%2C%C2%90%C3%84%1F%C3%B6%1E%C2%AE%1C%C3%AAX%05*%C2%80%3Ax%C3%B3%C2%9F%C3%8C*b%C3%B8OfI%0E%C3%9E%C3%9A8W%C3%A9%18dv%C2%A9%C2%AD%C2%ACkP)%C2%B1%C3%8C%C2%B2%C3%9E2%C3%99%03%1D_%0C%C2%90u%C3%9F%C3%BBs%C3%B2%C3%AE%C2%97%C3%AD%2Fy%C3%8B%1CvFa1%C2%89%0E%7CC%C2%9A%C2%84%08%C2%9A%7D%C3%B5%7D%C3%80%2F%C2%B1%C2%8F%C3%8C%C2%A7J%C2%BCYy%C3%83%C2%A6%23%7B9gqZU%C3%82.%C3%A4%C3%BC%C3%BC%C2%BC%C2%89%18%C3%88%C2%86%C2%BA%C2%AEk%3A%C2%B2%2F%C2%B1%C3%87%C2%98%C3%BD%0C%C3%840A%3B%7F%40%C2%A7%C2%BA%C2%9DJ%C2%80%19%C3%9E%C2%AB%C3%B2%0D%C2%B5(A%C2%BA%C2%B4%3F%C3%A8lE%C2%BD%C3%83mw%C3%A7g%C3%BCg%1F9o%C2%99fc%13Z%C2%92%C2%AC%1E%C3%99W*%C2%95%C3%84%C3%A5%C3%A5%C3%A5%C2%84%C2%BCP%C2%B9%C2%B7%C3%92%C3%91%C3%91Q%C2%A2Z%C2%AD%C2%BE%C3%A8KC%C2%90%C3%B5%C3%9B%C3%A4%18%C2%A3D1b%C3%84%C2%88%11%23F%C2%8C%C2%BF%19%C3%BF%038%C3%9F1%C3%A7%C3%90~%C3%9B%5D%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    var image1 = About_group.add("image", undefined, File.decode(image1_imgString), {name: "image1"}); 
        image1.alignment = ["center","center"]; 

    var about_button = About_group.add("button", undefined, undefined, {name: "about_button"}); 
        about_button.text = "About"; 
        about_button.alignment = ["center","fill"]; 
        about_button.helpTip = "Learn more about FPS Editor 2.5.";

    // -------------------------------------------------------------------------
    // PANEL1: Frame Rate Settings
    // -------------------------------------------------------------------------
    var panel1 = pal.add("panel", undefined, undefined, {name: "panel1"}); 
        panel1.text = "Frame Rate Settings"; 
        panel1.orientation = "column"; 
        panel1.alignChildren = ["fill","top"]; 
        panel1.spacing = 10; 
        panel1.margins = 15; 
        panel1.alignment = ["fill","top"]; 

    // --- ГРУППА с радиокнопками (Compositions / Videos and SQ) ---
    var group_targetType = panel1.add("group", undefined, { name: "group_targetType" });
        group_targetType.orientation = "row";
        group_targetType.alignChildren = ["left","center"];
        group_targetType.spacing = 15;

    var rbtn_compositions = group_targetType.add("radiobutton", undefined, "Compositions");
    var rbtn_footage = group_targetType.add("radiobutton", undefined, "Videos and SQ");
        rbtn_compositions.value = true; // По умолчанию выбраны композиции

    // --- Группа выбора "Current Frame Rate" и "New Frame Rate" ---
    var group_frameRates = panel1.add("group", undefined, {name: "group_frameRates"}); 
        group_frameRates.orientation = "row"; 
        group_frameRates.alignChildren = ["left","center"]; 
        group_frameRates.spacing = 20; 
        group_frameRates.margins = 0; 
        group_frameRates.helpTip = "Select the current and new framerate.";

    var statictext_current = group_frameRates.add("statictext", undefined, undefined, {name: "statictext_current"}); 
        statictext_current.text = "Current Frame rate:"; 
        statictext_current.helpTip = "Choose the current framerate of your item.";

    // Объявление массива framerateOptions
var framerateOptions = ["8", "12", "15", "23.976", "24", "25", "30", "50", "60", "120", "240"];

// Создание выпадающего списка для текущих кадровых частот
var dropdown_current = group_frameRates.add("dropdownlist", undefined, undefined, {name: "dropdown_current"});
for (var j = 0; j < framerateOptions.length; j++){
    dropdown_current.add("item", framerateOptions[j]);
}

var idx24 = framerateOptions.indexOf("24");
dropdown_current.selection = (idx24 !== -1) ? idx24 : 0;
dropdown_current.preferredSize.width = 80; 

// Разделитель
var divider1 = group_frameRates.add("panel", undefined, undefined, {name: "divider1"}); 
divider1.alignment = "fill"; 

// Статический текст для новой кадровой частоты
var statictext_new = group_frameRates.add("statictext", undefined, undefined, {name: "statictext_new"}); 
statictext_new.text = "New Frame rate:"; 

// Создание выпадающего списка для новой кадровой частоты
var dropdown_new = group_frameRates.add("dropdownlist", undefined, undefined, {name: "dropdown_new"});
for (var i = 0; i < framerateOptions.length; i++){
    dropdown_new.add("item", framerateOptions[i]);
}
var idx50 = framerateOptions.indexOf("50");
dropdown_new.selection = (idx50 !== -1) ? idx50 : 0;
dropdown_new.preferredSize.width = 80; 
    
    // -------------------------------------------------------------------------
    // PANEL2: Duplicate Options
    // -------------------------------------------------------------------------
    var panel2 = pal.add("panel", undefined, undefined, {name: "panel2"}); 
        panel2.text = "Duplicate Options"; 
        panel2.orientation = "column"; 
        panel2.alignChildren = ["fill","top"]; 
        panel2.spacing = 12; 
        panel2.margins = 15; 
        panel2.alignment = ["fill","top"]; 

    var checkbox_duplicate = panel2.add("checkbox", undefined, undefined, {name: "checkbox_duplicate"}); 
        checkbox_duplicate.text = "Duplicate compositions with new framerate and duration"; 

    var group_duplicate = panel2.add("group", undefined, {name: "group_duplicate"}); 
        group_duplicate.orientation = "row"; 
        group_duplicate.alignChildren = ["left","center"]; 
        group_duplicate.spacing = 10; 
        group_duplicate.margins = 0; 

    var statictext_prefix = group_duplicate.add("statictext", undefined, undefined, {name: "statictext_prefix"}); 
        statictext_prefix.text = "Duplicate Prefix:"; 

    var edittext_prefix = group_duplicate.add('edittext {properties: {name: "edittext_prefix"}}'); 
        edittext_prefix.text = "FPS_XX"; 
        edittext_prefix.preferredSize.width = 150; 

    var group_color = panel2.add("group", undefined, {name: "group_color"}); 
        group_color.orientation = "row"; 
        group_color.alignChildren = ["left","center"]; 
        group_color.spacing = 10; 
        group_color.margins = 0; 

    var statictext_color = group_color.add("statictext", undefined, undefined, {name: "statictext_color"}); 
        statictext_color.text = "Color Label:"; 

    var colorLabels = [
        {name: "Keep current color", value: -1},
        {name: "None", value: 0},
        {name: "Red", value: 1},
        {name: "Yellow", value: 2},
        {name: "Aqua", value: 3},
        {name: "Pink", value: 4},
        {name: "Lavender", value: 5},
        {name: "Peach", value: 6},
        {name: "Sea Foam", value: 7},
        {name: "Blue", value: 8},
        {name: "Green", value: 9},
        {name: "Purple", value: 10},
        {name: "Orange", value: 11},
        {name: "Brown", value: 12},
        {name: "Fuchsia", value: 13},
        {name: "Cyan", value: 14},
        {name: "Sandstone", value: 15}
    ];

    var dropdown_color = group_color.add("dropdownlist", undefined, undefined, {name: "dropdown_color"});
    for (var c = 0; c < colorLabels.length; c++) {
        dropdown_color.add("item", colorLabels[c].name);
    }
    dropdown_color.selection = 0; 

    // -------------------------------------------------------------------------
    // PANEL3: Duration Options
    // -------------------------------------------------------------------------
    var panel3 = pal.add("panel", undefined, undefined, {name: "panel3"}); 
        panel3.text = "Duration Options"; 
        panel3.orientation = "column"; 
        panel3.alignChildren = ["fill","top"]; 
        panel3.spacing = 12; 
        panel3.margins = 10; 
        panel3.alignment = ["fill","top"]; 

    var checkbox_addFrames = panel3.add("checkbox", undefined, undefined, {name: "checkbox_addFrames"}); 
        checkbox_addFrames.text = "Add frames only (no framerate change)"; 

    var group_duration = panel3.add("group", undefined, {name: "group_duration"}); 
        group_duration.orientation = "row"; 
        group_duration.alignChildren = ["left","center"]; 
        group_duration.spacing = 12; 
        group_duration.margins = 0; 

    var statictext_type = group_duration.add("statictext", undefined, undefined, {name: "statictext_type"}); 
        statictext_type.text = "Format:"; 

    var radiobutton_seconds = group_duration.add("radiobutton", undefined, undefined, {name: "radiobutton_seconds"}); 
        radiobutton_seconds.text = "Seconds"; 

    var radiobutton_frames = group_duration.add("radiobutton", undefined, undefined, {name: "radiobutton_frames"}); 
        radiobutton_frames.text = "Frames"; 
        radiobutton_frames.value = true; // по умолчанию

    var group_increase = panel3.add("group", undefined, {name: "group_increase"}); 
        group_increase.orientation = "row"; 
        group_increase.alignChildren = ["left","center"]; 
        group_increase.spacing = 10; 
        group_increase.margins = 0; 

    var statictext_increase = group_increase.add("statictext", undefined, undefined, {name: "statictext_increase"}); 
        statictext_increase.text = "Increase Duration By:"; 

    var edittext_increase = group_increase.add('edittext {properties: {name: "edittext_increase"}}'); 
        edittext_increase.text = "0"; 
        edittext_increase.preferredSize.width = 80; 

    var button_doubleDuration = group_increase.add("button", undefined, undefined, {name: "button_doubleDuration"}); 
        button_doubleDuration.text = "X2 Duration"; 

    // -------------------------------------------------------------------------
    // PANEL4: Parameters
    // -------------------------------------------------------------------------
    var panel4 = pal.add("panel", undefined, undefined, {name: "panel4"}); 
        panel4.text = "Parameters"; 
        panel4.orientation = "column"; 
        panel4.alignChildren = ["fill","top"]; 
        panel4.spacing = 12; 
        panel4.margins = 10; 
        panel4.alignment = ["fill","top"]; 

    var checkbox_applyAll = panel4.add("checkbox", undefined, undefined, {name: "checkbox_applyAll"}); 
        checkbox_applyAll.text = "Apply new framerate to all compositions"; 

    var checkbox_applyActive = panel4.add("checkbox", undefined, undefined, {name: "checkbox_applyActive"}); 
        checkbox_applyActive.text = "Apply changes to the selected or active composition only"; 

    var checkbox_applyColor = panel4.add("checkbox", undefined, undefined, {name: "checkbox_applyColor"}); 
        checkbox_applyColor.text = "Apply changes to compositions by color"; 

    var group_apply = panel4.add("group", undefined, {name: "group_apply"}); 
        group_apply.orientation = "column"; 
        group_apply.alignChildren = ["left","center"]; 
        group_apply.spacing = 18; 
        group_apply.margins = 0; 

    var button_applyChanges = group_apply.add("button", undefined, undefined, {name: "button_applyChanges"}); 
        button_applyChanges.text = "Apply Changes"; 
        button_applyChanges.preferredSize.width = 412;
        button_applyChanges.preferredSize.height = 30;  

    // -------------------------------------------------------------------------
    // Внутренняя логика
    // -------------------------------------------------------------------------
    var doubleDuration = false; // Флаг удвоения длительности

    // Обновление UI (вкл/выкл опций в зависимости от чекбоксов)
    function updateUI() {
        // «Duplicate Options» доступен, когда включён чекбокс
        group_duplicate.enabled = checkbox_duplicate.value;
        dropdown_color.enabled = checkbox_duplicate.value;

        // Если включён любой чекбокс (ApplyAll / Active / Color), блокируем выбор Current FPS
        if (checkbox_applyAll.value || checkbox_applyActive.value || checkbox_applyColor.value) {
            dropdown_current.enabled = false;
        } else {
            dropdown_current.enabled = true;
        }
    }

    // При переключении между Comps / Footage
    function updateTargetTypeUI() {
        if (rbtn_compositions.value) {
            // Включаем панель Duplicate Options, Duration Options
            panel2.enabled = true;
            panel3.enabled = true;
            
            // Меняем текст в Panel1, чтобы показывать, что это для композиций
            panel1.text = "Frame Rate Settings: Compositions";
            statictext_current.text = "Current Frame rate:";
            statictext_new.text = "New Frame rate:";

            // Меняем текст в Panel4 для композиций
            checkbox_applyAll.text = "Apply new framerate to all compositions";
            checkbox_applyActive.text = "Apply changes to the selected or active composition only";
            checkbox_applyColor.text = "Apply changes to compositions by color";

        } else {
            // Выбрано "Videos and SQ" => отключаем панель 2 и 3
            panel2.enabled = false;
            panel3.enabled = false;
            
            // Меняем текст в Panel1, чтобы показывать, что это для футажей
            panel1.text = "Frame Rate Settings: Videos and SQ";
            statictext_current.text = "Current Footage FPS:";
            statictext_new.text = "New Footage FPS:";

            // Меняем текст в Panel4 для футажей
            checkbox_applyAll.text = "Apply new framerate to all footages (video or sequence)";
            checkbox_applyActive.text = "Apply changes to the selected or active footage only";
            checkbox_applyColor.text = "Apply changes to footages by color";
        }
    }

    // Привязываем события
    rbtn_compositions.onClick = function() {
        updateTargetTypeUI();
        updateUI();
    };
    rbtn_footage.onClick = function() {
        updateTargetTypeUI();
        updateUI();
    };

    function handleDoubleDuration() {
        doubleDuration = !doubleDuration;
        edittext_increase.text = doubleDuration ? "X2" : "0";
    }

    button_doubleDuration.onClick = handleDoubleDuration;
    checkbox_duplicate.onClick = updateUI;
    checkbox_applyAll.onClick = updateUI;
    checkbox_applyActive.onClick = updateUI;
    checkbox_applyColor.onClick = updateUI;
    dropdown_new.onChange = updateUI;

    // --------------------------------------------------------------------------------
    // Основная функция применения изменений
    // --------------------------------------------------------------------------------
    function applyChanges() {
        var project = app.project;
        if (!project) {
            alert("After Effects project not found or not open.");
            return;
        }

        // Собираем значения из UI
        var currentFramerate = parseFloat(dropdown_current.selection.text);
        var newFramerate     = parseFloat(dropdown_new.selection.text);

        var isFrames = radiobutton_frames.value; // true, если выбрано "Frames"
        var durationToAdd = 0;

        if (edittext_increase.text === "X2") {
            doubleDuration = true;
        } else {
            doubleDuration = false;
            durationToAdd = parseFloat(edittext_increase.text) || 0;
        }

        // Начинаем Undo-группу
        app.beginUndoGroup("Framerate and Duration Editor");

        var processComps = rbtn_compositions.value; // true => работаем с CompItem, false => с FootageItem
        var itemsToChange = [];

        // --- Функции для получения и установки FPS/Duration у comps или footages ---
        function getItemFPS(it) {
            if (it instanceof CompItem) return it.frameRate;
            if (it instanceof FootageItem) return it.mainSource.conformFrameRate;
            return 0;
        }
        function setItemFPS(it, fps) {
            if (it instanceof CompItem) it.frameRate = fps;
            if (it instanceof FootageItem) it.mainSource.conformFrameRate = fps;
        }
        function getItemDuration(it) {
            if (it instanceof CompItem) return it.duration;
            if (it instanceof FootageItem) return it.duration; 
            return 0;
        }
        function setItemDuration(it, newValue) {
            if (it instanceof CompItem) {
                it.duration = newValue;
            } else if (it instanceof FootageItem) {
                // Только для имидж-секвенций (isSequence = true) AE позволит менять duration
                if (it.mainSource.isSequence) {
                    it.duration = newValue;
                }
            }
        }

        // --- Собираем, какие items изменять, в зависимости от параметров ---
        function isItemColorMatch(it, colorLabel) {
            return (it.label === colorLabel);
        }

        if (checkbox_applyColor.value) {
            // По цвету
            var colorFromActive = 0;
            if (project.activeItem) {
                colorFromActive = project.activeItem.label;
            } else if (project.selection.length > 0) {
                colorFromActive = project.selection[0].label;
            }
            // Перебираем все items в проекте и ищем совпадение по цвету
            for (var ci = 1; ci <= project.numItems; ci++) {
                var cItem = project.item(ci);
                if (processComps && cItem instanceof CompItem && isItemColorMatch(cItem, colorFromActive)) {
                    itemsToChange.push(cItem);
                } else if (!processComps && cItem instanceof FootageItem && !cItem.mainSource.isStill) {
                    // Только видео или секвенции
                    if (isItemColorMatch(cItem, colorFromActive)) {
                        itemsToChange.push(cItem);
                    }
                }
            }

        } else if (checkbox_applyActive.value) {
            // Только активный или выделенный
            if (project.selection.length > 0) {
                var sItem = project.selection[0];
                if (processComps && sItem instanceof CompItem) {
                    itemsToChange.push(sItem);
                } else if (!processComps && sItem instanceof FootageItem && !sItem.mainSource.isStill) {
                    itemsToChange.push(sItem);
                }
            } else if (project.activeItem) {
                var aItem = project.activeItem;
                if (processComps && aItem instanceof CompItem) {
                    itemsToChange.push(aItem);
                } else if (!processComps && aItem instanceof FootageItem && !aItem.mainSource.isStill) {
                    itemsToChange.push(aItem);
                }
            }

        } else if (checkbox_applyAll.value) {
            // Все
            for (var ai = 1; ai <= project.numItems; ai++) {
                var allItem = project.item(ai);
                if (processComps && allItem instanceof CompItem) {
                    itemsToChange.push(allItem);
                } else if (!processComps && allItem instanceof FootageItem && !allItem.mainSource.isStill) {
                    itemsToChange.push(allItem);
                }
            }

        } else {
            // Фильтр по currentFramerate
            for (var fi = 1; fi <= project.numItems; fi++) {
                var fItem = project.item(fi);
                if (processComps && fItem instanceof CompItem) {
                    // Проверяем fps
                    if (Math.abs(fItem.frameRate - currentFramerate) < 0.001) {
                        itemsToChange.push(fItem);
                    }
                } else if (!processComps && fItem instanceof FootageItem && !fItem.mainSource.isStill) {
                    var footFPS = fItem.mainSource.conformFrameRate;
                    if (Math.abs(footFPS - currentFramerate) < 0.001) {
                        itemsToChange.push(fItem);
                    }
                }
            }
        }

        // --- Теперь изменяем FPS / Duration / Дублируем ---
        for (var k = 0; k < itemsToChange.length; k++) {
            var item = itemsToChange[k];

            var oldFPS = getItemFPS(item);
            var oldDur = getItemDuration(item);

            // 1) Add frames only (не меняем FPS)
            if (checkbox_addFrames.value) {
                if (doubleDuration) {
                    setItemDuration(item, oldDur * 2);
                } else if (durationToAdd > 0) {
                    // Прибавляем либо durationToAdd секунд, либо durationToAdd/oldFPS кадров
                    var extraDur = isFrames ? (durationToAdd / oldFPS) : durationToAdd;
                    setItemDuration(item, oldDur + extraDur);
                }
                $.writeln("Modified duration (no FPS change): " + item.name);

            // 2) Duplicate
            } else if (checkbox_duplicate.value) {
                // Дублируем
                var newItem = item.duplicate();
                newItem.name = edittext_prefix.text + "_" + item.name;

                // Меняем FPS
                setItemFPS(newItem, newFramerate);

                // Присваиваем цвет, если выбрано
                var colorValue = colorLabels[dropdown_color.selection.index].value;
                if (colorValue !== -1) { // -1 => "Keep current color"
                    newItem.label = colorValue;
                }

                // Меняем длительность, если нужно
                var newItemDur = getItemDuration(newItem);
                if (doubleDuration) {
                    setItemDuration(newItem, newItemDur * 2);
                } else if (durationToAdd > 0) {
                    var extraDup = isFrames ? (durationToAdd / newFramerate) : durationToAdd;
                    setItemDuration(newItem, newItemDur + extraDup);
                }
                $.writeln("Duplicated + modified: " + newItem.name);

            // 3) Просто меняем FPS (и возможно Duration)
            } else {
                // Меняем FPS у исходного item
                setItemFPS(item, newFramerate);

                // Если нужно увеличить Duration
                if (doubleDuration) {
                    setItemDuration(item, oldDur * 2);
                } else if (durationToAdd > 0) {
                    var extra3 = isFrames ? (durationToAdd / newFramerate) : durationToAdd;
                    setItemDuration(item, oldDur + extra3);
                }
                $.writeln("Changed FPS/duration for: " + item.name);
            }
        }

        // Завершаем Undo
        app.endUndoGroup();
        alert("Framerate and duration changes applied successfully.");
    }

    button_applyChanges.onClick = applyChanges;

   // Кнопка «About»
    about_button.onClick = function() {
        
    // Создаём окно About согласно предоставленному коду
    var dialog = new Window("dialog", "About | FPS Editor"); 
        dialog.orientation = "column"; 
        dialog.alignChildren = ["center","top"]; 
        dialog.spacing = 10; 
        dialog.margins = 16; 

    // Логотип (можно добавить изображение, заменив image1_imgString на корректную строку)
    var logo_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00d%00%00%00q%08%06%00%00%00%23%C3%B9%06%7C%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%0CxIDATx%01%C3%AD%C2%9DKo%13K%16%C3%87%C2%8F%C3%8D%15%C3%A1%C2%8D%C2%81%05b5%C2%9D%25%2B%C2%92%3B%C2%9B%C3%99%C3%85%C3%A1%0B%C3%9C%C3%B0%09p%3E%01a%C2%89%C3%84%C3%83a%C3%83%C3%AC%C2%92%7C%02'%C3%8BY%25%7C%02%3B%C2%AB%11%0B%26%C2%8E%C2%84%14%01%0B%C3%B7%C2%95x%08%04%C3%98%3C%24%C2%86W%C3%BA%C2%9E%7F%C3%BB4%C2%A9t%C3%BAQ%1Dw%C2%B5%1Dn%C3%BD%C2%A4%C2%92%C3%AD%C3%AA%C3%AA%C3%AA%C3%AA%3AUu%C3%AAq%C2%AA%5C%C2%A2!%C3%90%C3%A9t%C2%9C%2F_%C2%BE%C3%8C%C2%94%C3%8B%C3%A5K%C2%9E%C3%A7U%C3%99%C2%AB%22%0E%C3%B4%C3%98%C2%B9p%7Cm%C2%9D%C3%9D%C2%9A%C3%AB%C2%BA%C3%84%C2%9F3%C3%AC.%C2%95J%C2%A5*%7F%C3%AE%09%C3%8F%C3%BE%C2%B8g%C2%9D%3F%C3%97%C3%9A%C3%AD6%C3%BD%C3%B8%C3%B1c%C2%86%7F_b%17%19%5E%C3%AEY%3Ft%C3%A8%C3%90%C3%9A%C2%8D%1B7%5C%1A%11JT%20O%C2%9E%3C%C2%A9%C3%B1%C3%87U%11%C2%826%2C%3Cz%C3%BF%C3%BE%3D%7D%C3%B8%C3%B0A%2B%C3%BC%C3%A7%C3%8F%C2%9F%C3%A9%C3%B5%C3%AB%C3%97%C3%B4%C3%B6%C3%AD%5B%C3%92%C2%A4%C3%8DiZ%C2%BA%7D%C3%BB%C3%B62%0D%C2%99B%04%C3%B2%C3%B4%C3%A9%C3%93%C3%AA%C3%B6%C3%B6v%C2%83%C2%BF%3A4%00%C3%9F%C2%BF%7F%C2%A7w%C3%AF%C3%9Ei%0B%C3%A6%C3%AB%C3%97%C2%AF%C3%B4%C3%B2%C3%A5Km%C3%81%C2%A0%C2%96q%3A%C3%A7%C2%87)%18%C2%A3%02%C3%A1%C2%A6%C2%A9%C3%B2%C3%AD%C3%9B%C2%B7%3B%5C%C3%BA%C3%A6(Gz%C2%BD%C2%9E%2F%18%C3%8E%3C%C2%AD%C3%B0%C2%A8-%10%0C7cZ%C3%A19%C2%BD%C2%8B%10L%C2%BD%5E%C3%AFQ%C3%81%18%13%C3%88%C3%96%C3%96%C2%96%C3%83%3Ab%C2%95%C2%BFN%C2%90%01P%5B%C2%9E%3D%7B%C3%A6%7F%C3%AA%C2%80%C3%9A%C3%82M%C2%A6%C3%BF%C2%A9%03j%0B%C3%AB%C2%97%C3%A9%C2%A2%C3%B5%C2%8B%11%C2%81%C2%880%C2%9A4%60%13%C2%95%C3%86%C2%AF(%C2%94C%C2%943h%C2%A6%C2%B8%C2%BA%C3%BF%C2%97%0C%0B%03%C2%B0%C3%90%C3%A9%C3%A8%C3%91%C2%A3%C3%B4%C3%A9%C3%93'43%C2%A9%C3%A19s%C3%A9%C3%84%C2%89%13%C3%94%C3%ADv%C2%B5%C3%823x%C2%97%C3%AA%C3%94%C3%94%C3%94%7FZ%C2%AD%C3%96%C3%BF%C2%A9%00%C3%8A%C2%943%C3%90%19T%C2%800%02%C3%86%C3%86%C3%86%C3%A8%C3%AC%C3%99%C2%B3%C3%9A%C3%A1%C2%8F%1D%3BF%17.%5C%C2%A0%0CL%C2%B0%C3%A0%C3%AFPA%C3%A4ZC%C3%90%C2%AD%C3%A5%C2%92%C3%B7o*%C2%98%23G%C2%8E%C3%B8%5D%5D%C3%9D%C2%A6%C3%AB%C3%B8%C3%B1%C3%A3%C3%B4%C3%B1%C3%A3%C3%87%2CM%C3%97%C2%BF._%C2%BE%C2%BC%C3%9El6%5D2L%C2%AE5%C2%84%C2%85QXI%0As%C3%BE%C3%BC%C3%B9L%C3%A1%1D%C3%87%C3%89%12%1CBiP%01%C3%A4%26%10%19%C3%B494%24~%C3%BB%C3%AD7%3Au%C3%AA%C2%94v%C3%B8%C3%83%C2%87%0F%C3%93%C2%B9s%C3%A7%C2%B4%C3%83sas%C3%AE%C3%9E%C2%BD%5B%23%C3%83%C3%A4YC%C2%AE%C3%91%C2%909y%C3%B2d%C2%A6%C3%B0Yt%0F%C3%A0Zr%C2%95%0C%C2%93%C2%8B%40%C3%90%C3%8D%C3%A5%12dd%C2%BC%C2%91%05%C3%B4%C2%B8PSt%C2%81%00QS2P%C2%BDw%C3%AF%C2%9EC%06%C3%89E%20%5CrfhD%40%C2%B76%0B%C2%95J%25Sx%C2%99%C2%B44F%5E%02%C2%99%C2%A2%11!c%C2%89%C3%B7kUF.%C2%91A%C3%B2%12%C2%88C%23%02%C3%86%19Y%C3%88%C2%AAw%C2%98*%19%24%17%C2%81%C2%A0%07B%23%02F%C3%AFY%C3%80%C3%A8%3D%0B%C2%B2%C2%B6b%C2%8C%C2%BCzYF%13%C2%99%05%C3%93%02!%C3%83%C3%AF%C2%9A%C3%BB%C3%94%C2%89e0%C3%B2%12H%C3%A1%C3%AB%06q%C3%A8%C2%AE%C2%91%04%C3%A8%C2%AE%C2%91(%18%7D%C3%97_N%20%3C%C2%B9%C2%99)%C2%BC%C3%AE%7C%C2%96%C2%82K%06%C3%89K%20%C3%AB4%22%C3%A8N0%06%60%C2%BD%3E%0B%C2%AC%C3%94%C3%BF%24%C2%83%C3%A4%C3%95%C3%8Bj%C3%93%C2%88%C2%80Y%C3%9F%2C%60-%25%0B%C3%9Cih%C2%91A%C3%B2%12%C3%88%1A%C2%8D%08Y3%18%C3%AB%C3%B3Y%C2%80%C3%99%10%19%24%17%C2%81%5C%C2%BCx%116N-%1A2h~%C2%B24Y%C2%A8M%19uH%C3%9B%C3%B4rnn%C3%9D%5E%C3%AE%C2%AD%C2%AC%C3%90%C2%90%C2%81%C3%ADV%16%5E%C2%BDz%C2%95)%3Cl%C2%B7%C3%880%C2%B9%1A9%3C~%C3%BC%C2%B8CCZ%13A%C3%8D%C2%80%C2%85%C2%A3.%C2%A8%19%C2%8F%1E%3D%C3%92%0E%0F%C2%83%C2%87%C2%9B7o%C2%8E%C2%93ar%1D%18%C3%B2%18%60%C2%96%C2%86%04%C3%AC%C2%B4%C2%B2%C3%B0%C3%A2%C3%85%C2%8BL%C3%A1a%C2%A7E%05%C2%90%C2%AB%40X%C2%97%C2%B4%C2%8A%C2%A8%C3%96a%C2%A0%C2%98u%C2%AD%19%01%0C%C3%A72%0A%C2%B003%C3%93%C3%9C%C2%A7N%C3%86%C3%86%C3%86%C3%AA%5C%C2%BD%0B%C3%AB%06%07%C3%A6%C2%A5%C2%BA%04%C3%A6%C2%A5%C2%BA%C2%A0%C2%A9b%C3%BDX%C2%A7%C2%82%C3%88%5D%20%C3%A3%C3%A3%C3%A3%3D~%C2%81%2BdxD%0B%02C9%C3%9D%C3%A9%C2%92%C3%80PNw%C2%BA%240%C2%94%2B%C3%92%C2%A4%C3%94%C3%88%C3%A4%22%C2%BA%C3%81%C2%9CI%C3%93dP(%C3%A8%C3%A2f%C2%B1ZD%177%C2%8B%C3%95%22%C3%93%1E%C2%86)%C2%A9%C2%B1%C3%99%5E%08%C2%85W%C3%AF%26M%C3%A8%14%C3%A8%C2%8C%C3%A7%C3%8F%C2%9Fk%0B%03%3A%23%C2%A30%C2%96%C2%B8%16M%0Fc%C3%9FH!%C3%9B%11%C2%B6%C2%B6%C2%B6jb%C3%BD%C3%A7%C3%90%00%40%00%18%3B%C3%A8N%C2%8F%40%00%C3%A8%0A%C3%AB%C2%8E%C3%9E%C3%91Dq%01%C2%9A%C2%BDu%C3%ABV%C2%8B%C2%86D%C2%A1%1Bv%20%18n%06%C2%AEe%C2%B5P%C2%81%00%60i%C2%A8%C3%9B%C2%93%C2%82%00%C3%9E%C2%BCy%C2%A3%C2%AD%C3%AC1%C3%8B%C3%80M%C3%AC%C3%8A%C3%9Ff%C3%83N%18%C2%98%0D%C3%81R%05%C3%86%11X%C2%8F%C2%97%25%60u%C3%8BYO2iS%C3%9D%C3%92%C3%86%C3%BES%12vWx%0E%C3%9Bc%C3%BF%16%7FnbK%C3%9B%C2%83%07%0F%60%0E%C3%A4%C3%87%C2%8F%C3%B0%C3%A1%C3%B8%11%C2%9E%3F%5B%C3%AC6GmK%C2%9B%C3%85b%C2%B1X%2C%16%C2%8B%C3%85b%C2%B1X%2C%16%C2%8Be4%C2%81i%C2%BFi%C3%B3%C3%BE%C2%83%C2%86%3F%C2%B9(%C2%87%C3%83%C2%A4n%C3%9A%C3%A4I%C2%B9q%C2%8D%C3%B0.%C2%BB%15%0E%C2%BB%1CuQ%C2%8Ef%C3%82T%3Cf%7C%2B%C3%8A%3D-v%C3%B3r%C3%AEU*%1CO'%25%C3%88%7D%C2%8EK%C3%AB%C3%90%1B%1C6%C3%83%1F%C2%A79%C3%BC%C2%AC%C3%A2%C2%87m%C3%90%13%C3%AC7I%05%12%C3%AC%C2%90D%C3%868%C2%A4ORx%C3%B8We%C3%8F%C3%BA%C2%A4%C3%8C%C2%AC%C3%BA%C2%B0%1F%C2%84%C2%B8%18sOM%C3%AE%C2%BB%C2%A2%C2%B9%26%C2%8F%7B%C2%96)%C3%9E%C2%AE%C3%98%25%7D%C3%B0%3E%C3%BF%08%C3%B9%C2%A1%C2%B0%C3%AEZ%C2%BA%C2%95Yc%C2%9C%C3%A12%C2%AD%5Bp%C2%B2%12%C2%B5e%15%C2%A5*%C2%8B%C3%85%C2%99%1A%1E%2F%C2%86Lw%C3%84-%C2%B0%C3%B3K%C2%9D%C2%BCL%20%0C%C2%BC(V%12%5B%C3%B2%C2%BB%C3%86%C3%AE%C2%AA%C3%9C%C2%83%13%C2%84t%C3%AD%C2%9F%C3%96%C3%A3j%C3%A2%C2%A0p%C2%BC%C2%B5%C2%98K%0E%C2%99%C2%863%C2%AB%C3%AE%C3%AD%C3%A0%0C%12%5E%C3%B4BG%C2%B9%5E%11%C3%BF9%C3%85%C2%AF%C2%96%12g%C3%AA%02V%5C%3C%1A%C3%B7!%7DUqA%C3%9A%C2%96%C3%995%23%C3%82U%C2%94%C3%9F%C2%8E%C3%9C%C3%A3%C3%89%C2%A7%C3%A3%C3%85%C3%A8%3F%25l5%25%1D%15%C3%A5%3B%C2%8E0tr_S%C2%97%26%C3%AA%C2%BE%C3%A2%C3%A5%C3%88%C2%A7%C2%9A%C3%B8(%2B%C2%8Eev%C3%93%C3%A2%5C2%00%C2%BF0jl%C2%97%C3%BA%C2%B5%10n%23A%C3%B8%C2%8B%12%26%C2%A0).%C3%B8%0E%1D6%17%C2%8A%C3%9F%11%C3%81%C3%A2%1At%C3%90%C2%AA%14%C3%8EZL%C3%BC%0B%C3%92%C2%8C%07i%C2%AA%C3%A9%C3%AF%C2%B2%C3%8F%C2%86%C2%9A%C3%A1%C2%AA%C3%A2%0E%40B%5CUWH%C2%9B%C3%AC%C2%92!D%18Xu%C2%9C%0E%0C%C3%83%C2%A5%047t%C2%9E%C2%8B%0E%C2%8D%C2%B4%06%C3%88%C3%AC%C3%B1%C2%B0%0EQ%C3%B4%0Bt%C3%9A%C2%99%40wJ%07%C2%A8%C2%81j%C3%85~a%C3%BBg%C2%A4%07%05b2%C3%88%C2%8B(%C2%81%20%C2%B3%C2%A2J%C3%B0J%06%0Bw%C3%B5%08%C2%8A%C2%B6%C2%BC%C3%90%C2%B2%C2%94%06%24%C3%80%C2%A1~%C3%A9t%C2%A9%C2%AFG%C3%B0%12kj%07%20O%24%C2%B3%C2%901W%C3%94w%C3%80w%C2%BEv%C2%9D%C3%BA%19%C3%99%C2%A2%C3%81%C2%B8%23q%C3%96TO%C3%BE%C2%BD(M%13%3E%C3%AFG%C2%BC%C3%A3%C2%95%3D%1D%C2%84P%C3%BB%1DG-%26%C3%BC%C2%8C%C3%92%26%C3%A3%7BS%C2%B9%C3%96%08%3D%07m%C3%A5b%C3%823%C2%B4O%13%C3%B2%C3%92qB%C3%A9%C3%9DH%C2%88%0B%C2%85%23%C2%ACC%C2%A2%C3%B4%C2%8A%13%C2%8E%3B%C2%94%C2%9EZL%C3%BC%15%C2%B9%5EM%C2%8A%1FD%C3%95%C2%905%C2%8An%C3%A3%5D%C2%8Af5%C3%86%1F%C3%A1w%19(K%C3%A9%C2%80r%C2%AFS%7F%03%C2%BEo%C2%B8%40%3Bz%06%19%C3%A7%C2%A8%C3%A3%C2%81%14%C2%AEKz%C3%B7%10*u8%7D!i%2B%C3%9A%26%C3%AD%C3%AD%C3%B6j%C2%A3dt%3B%26-0%C3%82%C3%805%C2%84kQ%02Q%02%C2%B9%3E%40%1F%C2%BB'%0Em%C3%A5b%5C%13%24%C3%BEk%C3%A2%C3%B0Bh%C3%86%20X%C2%87%5D%C2%8D%7F%C3%AB6%C2%8F%3D%C3%8D%C2%B4%C2%A2%C3%89%C3%90%097%10)%C3%A3'%C2%AD%C3%A68%0F%C2%A5%3E%C2%AE%C2%93)%5E%C3%9F%C2%8C%C3%87%C3%8F%C2%98pf%C3%A3E%C2%BC~%5B%1E%C3%946%08%C2%A8E%C3%B9%C2%91%C2%B6Q%C3%B34%0DF%C2%A0%C3%80%C2%9D%C2%84%C2%BC%C3%90%C2%9A%22*%C3%B2%C3%A0%00%C3%B4r%C2%82%C2%AE%60T%C3%A2L%C3%8Ei%C2%B9%C2%94%7CFI%C3%AA%C2%B8G%23%C3%BE%5E%C3%9C3D%C3%A7%C3%A0%19%C3%AD%C2%94x%0A%15H%C3%90%C3%A5C%C3%867%C2%BD%C2%9D%C3%81%C2%95%23%C3%8A%7CA%09%C2%BBF%C3%B9%C2%B2%C3%8C%C3%8E%C2%91Z%C2%BA%0BQ%C3%84%03%15%06i%C2%82%C3%B1~%C3%97b%0A%1Bz%C2%9Dh%19R%C3%9F%C3%8B%C3%948%24%C2%8AEv%7FP%C2%BF%C2%A4%C3%805c%C3%82%C3%8Dg%C3%90a%C2%8E%17%3F%1A%C3%AE%05m%C2%BA%C3%98%C3%ACb%C2%AA%C2%A6%C2%81%0C%0B%C2%A6%5B%C3%A4%5Et%C3%85%C2%91Q%0E%C2%A5%20%C3%B1%20%C3%B3%C3%AFH%7C%C2%AA%0E%C2%AB%C2%B3%C3%9B%C2%90g%5C%C2%97%C2%B0%10%0E%0A%C3%9B%1C%C2%BB%2B%C2%A4%C2%8B%C2%97%C3%A3%C3%94I%C3%8A%7DA%C2%B7%C2%B7%C3%A3%C3%AD%C2%A5%C3%A9e%C2%98%0A%C3%B1%C3%92i%C2%A6%C2%A4%C3%9B%C2%93tL%C2%88%7Fj%C2%B7W%C3%BC'%C2%BC%C2%9D%C3%B4Gu%C2%8BW%23%C2%9EQ%C2%8D%C2%88'2%C3%BE%C2%A1%C3%98%C3%B6%02o%C3%87F%C3%97%C3%BF%C3%BB%08S%C2%83%C3%82%C2%88%C3%A7%C2%A2%C3%94%C2%A2%C2%86%C3%B6J%03%C3%AC%C3%B4%C2%92%C3%B4%C3%B7%C2%A2%C3%92%C2%AD%3C%C3%8355%2Bl%C2%B1X%2C%16%C2%8B%C3%85b%C2%B1X%2C%16%C2%8B%C3%85b%C2%B1X%2C%16%C2%8B%C3%85b%C2%B1X%2C%16%C2%8B%C3%85%C3%B2k%23%C3%A6%3D%5Dq%0B%C3%A2W%C2%97%C3%9F%1DqW%C3%85%7F9%C3%A4%3F%C2%A3%C3%84%03%C3%BF9%25%C3%8E%C2%8Ebf%C3%93%11%13%C2%9CN%C3%889%C3%8A%C3%BD%C3%A1g%C3%8E%C2%89k*a%1A%5E%C3%9F%10%C3%BC%C3%97%C2%84_%C2%AE%06%3B%25%C3%B9%0E%C2%9B%2C%7F%C3%87%C2%92dN%5D%C3%BC%C2%91%C2%91%5D%C3%B9%0E%C2%81%C3%94b%C3%A2%C2%89%C3%9A2%10%C3%8E%C3%B4%5D%C2%BFCa%C3%95gb%C3%9B%C3%84%C2%86%7Co%C2%8A%60%7C%C2%81%C2%8A_%C3%A6s!%C3%B3%C3%82%C2%B4%C3%A5b%C2%95d%C2%97%C2%AC%C3%98%2F%C3%B9%5B%C2%8C%C2%A5%C3%A4%C2%9F%0E%C3%99f%05%C3%BC%C2%A1dj%60A%C2%8F%1A%C3%A4%1Bc%7B%C3%89%06%C3%8D%00%C2%99%1B%C2%9C%C3%9B%C2%B8%18%C2%BA6%25B%C3%81%C3%96%C2%83%60%C3%9B%5D%C2%B0a%07%C3%8F%08%C2%B6O%60%C3%93)%0C%C2%B4%C3%B7m%C2%B7%C2%B5_%C2%8A%C2%B0%C3%AD%C2%8D3%C2%80%C2%83P%7C%C3%A3k%C3%9Amf%C3%A9%1B%C3%8E%C2%89S%0D%C2%95A%C2%8B%C3%BA%3Bv%C2%93%C3%A8%C2%A8%C3%B7G%C2%A4%05%C3%BE%C3%88l%C2%BF%C2%99%14c%C2%B9%C3%80%2CtY%C3%BC%C3%A6t%C3%ACpM%60Z%20.)%C3%9B%C3%9B%C2%82%26K~b%0F%086x%22CT%03%C3%A5ud%C2%8C8d%60-%14O%C3%9A%01%07%C3%B7%C3%A5%C3%9E%C2%A8%0C%C3%9D%C2%94LG%C3%8DQw%C3%99%C2%BA%C2%A4%08%C3%90%C3%9B9%C3%89%C2%B4pL%0B%04%2F%C3%9E%C2%93%C2%B6%1Dzb3%C3%82%7C%13%C3%8DDC%C3%89%C2%9C%C2%85%C2%90R%C2%87%20%C2%B0%0Fo%C2%96%1DjR%C3%9BK%C3%98nL%7D%C3%8B%C3%BAN%C2%8C%3E%C2%B9%26z%02%C3%BAc)%C3%81%7C%155w%C2%86~U%C2%BC%03v%C2%A6%C3%89AJ%C2%AB%C3%85b%C2%B1X%2C%C2%96%11%C3%85%C3%88%0E%C2%AA%C2%8D.U%C2%B61~(%C3%BB%1B%C3%B6%C3%B7%C3%876%C3%BD%C3%89%7D%C3%B2%C3%96%C3%A4%C2%99%5C%C2%B7G%C2%8F%3C%C2%B9%0Bd%C3%A3%3D6D%C3%BA%C2%9B%1Cy%C2%BC%C3%A0%C2%9F%C2%90%C2%B0%C2%BF%C2%ADj%25%C2%BAT%C3%AAO%C2%BD%C2%B4K%1E%C3%8D%C2%B2%60%C3%9C%C2%A4%C3%A0%C3%92U%C2%8D%C3%AD%C2%AEf%C3%9DZ%C2%9640%3C%10%C3%9B%C3%94P%2B%C3%BE%C3%97%C2%A3%0D8%C3%BE%5E%C2%A5%1C%C3%A0x%C2%9C%C2%87%5D%C2%AAs%C2%9C%5D%C3%BE%C2%9E8%C3%99%C3%A7%C3%A9%C2%9D%C3%97%C3%92%C3%B4%C3%B46%C2%B5N%C2%84%C3%AEk%C2%A8%3F%C3%A8%20%C3%805%C2%A3!%C3%82%C3%88%7DP%C2%A5%08%C3%85%C2%89%0B%C2%A3)%10%C3%90M%13%C2%8A%C2%B7%7B%C2%970%C2%BEW%C2%8B%12H.%C2%B3%C2%BD%C2%A8%11%C2%9C%C3%8C*7-%C3%93%C3%9C%C2%B4dn%C2%A2%C2%82%C2%8C%C2%8Ek%C2%96%C3%BEy%C2%86%05%C3%82a%C2%BC%C2%92%3F%C2%A51M%C3%A9%C2%B8%C2%B4%C3%BBh%0E%14%C2%92%C2%AA%7C%C3%82%C3%85%C3%86%C3%A3%C3%B5%C2%A7%C3%BF%1D%C3%85%C3%AB%3A%1D4%1E%C3%B6h%C3%B5%C3%A1%7BjD%5D%C3%A3%C2%92%C3%9D%C3%A1%0C%C3%BF9%2F%C3%845i%01a!%04%C2%BE%C3%96d%C3%A7)%C2%AE%03%1D%14%15%C2%8F%C2%84%C3%B7%C3%A2j%60%C2%A8%C2%864%22%C2%AE%C2%ABG%0Cvb%C3%A2pB%C2%B5%C2%A3!%C3%BE%C2%85%C3%95%C2%90%5C%26%17%C2%A1%7C%C3%8B%C3%9B%C2%B4%12u%C2%8D%C2%93%C2%BF%C2%84%C2%92%C2%8D%0Ce%C3%87%0BM4%C3%83a%C3%A7%C3%99%C2%AF%C3%A9a%C3%8A%C3%9B%C2%A3Ivg%C3%84%C3%8D%C3%B3%C3%B5%1A7Qs%C3%A1xP%7B%C3%B89%C3%AE%C3%B6%C3%BE'%C3%BD%C3%94%C3%A3%C2%97%C3%A2jqp%C2%80g%40!%C3%BF%7F%C2%AB%C2%92%C3%97%02U%C3%AC%C3%B1G%C3%9C%C3%9C%2C%3ED%C2%93T%C3%AA%1F%C2%BF%C2%84%1E%13%C3%89%C2%A9%C2%A5%C3%A5~%13%C2%A7%C3%9E%C2%B7%C3%8Ca%2B%C2%A5%12E%1E'%C3%AB%C3%B5%C2%9F%C2%A1%C2%A3%C2%A3P%C2%A2%C2%9B%C2%A1%C3%B4%C2%A9%C2%9D%C2%82%3DG%C3%8Bz%3B%C2%A7%C3%8E%05%2C%0D%C2%A37U%C3%88Y'e%1CL%C2%86%23%C3%BDJ%C2%B4%C3%B6%7B%C2%85%C3%96%14%C3%A5%C2%BC's%C3%8B%3Cv%C3%A1Z%C3%A2%26D%C2%A7%C2%A3%C2%A3%1C%C2%8A%3F%C2%BB%04%C3%93%C3%BF%C3%B5%08%7F%C2%B5%C2%A9t)%C3%BA%7Ca%C3%A3%C3%A4%22%C2%90R%C3%BF%05%C3%BC%C2%A3%24%C2%A2%C2%AEC%C3%91s%C3%BB%C3%AFb%C2%B0'%C2%BF%5DV%C3%92%2B%2C%C2%A0U%C2%AE%11K%C3%A5%20%C2%93%C3%8BXb%C2%A5%1A%C3%97%C2%A2%C2%B8%C2%83Zp%C2%8C%C2%AAK%C2%831%1B%5E%07%11E%5ES%C2%BC%C3%A6%C2%875%C3%96%C3%88E%C2%87l%7B~%C3%A6%26%C2%AE%C3%A4qF%C3%9F%2F%2Bk%C3%94%C2%BF%C2%9F%C3%B13%C2%9E_%C2%9C%C3%97%C3%90%C3%B9%5E8%C3%BC%C3%85%C2%B0%C3%B4%C3%94%C3%B6%C2%AC%C3%B6%05c%1B%C3%8D%C2%91%3BV%0C%7FB%C2%BB%C3%97%C3%86%C2%A3%C3%8E%C3%AB%C3%9AU%3BJ%C2%86%0Eg.%0C%C3%A9%01u%C3%B3%1A%10F%C3%84%C2%8FAg%07%C3%A3%C2%91%C2%B80I%C2%BD%2C%C3%A9%3Du%C2%A3%C2%AE%7B%7D%C2%8B%16%C2%95%C2%A83%C2%B5%0A%C3%ABe%C3%A5%06zF%3A%23%C3%AA%C2%AC%40%18%C3%81%C2%A03)%C2%9C%C2%97%C3%9E%C3%AD%C2%9D%09e%C3%BCO%C3%93%C2%9F%C2%A4%C3%BB%C3%A4%C3%9E%C2%8350%04%C3%92%C2%9B%C2%AA%C2%B0B%C3%99%C3%A0q%C3%862%C2%BA%C2%B6i%C3%B3OI%C3%88xc%C2%86%C2%9B%C2%B2%3B%C3%9C%C2%BDr%C3%91%C2%94%C2%A5%C3%9C%C3%A2%C3%92%C3%8E%60p3%7C%11F%0F%C2%9C%C2%97%C3%A8%C3%86N%C2%89%C3%97%C2%94r%C2%9F%2B%C3%9F%C3%A3%C2%BA%C2%B9%3D%C2%A2b%269%C3%B3%C2%9F%5C%C3%A4%C3%A6k%C2%BBD%0B%C2%A5%C3%BEx!8%C2%A5t%3F8%C3%AC%5C%C2%8Cc%20l%C3%BA%C2%9B%60%C3%AC%003)%C3%A1%C2%834_%C3%AE%205%C3%AC%C2%A0%C3%B2%17%16%C3%84%C3%BEf%C3%98%C2%83%0E%01%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    var logo_image = dialog.add("image", undefined, File.decode(logo_imgString), {name: "logo"}); 
        logo_image.alignment = ["center","center"]; 

    // Версия сборки
    var build_version = dialog.add("statictext", undefined, undefined, {name: "build_version"}); 
        build_version.text = "Build 2.7"; 
        build_version.helpTip = "Version information.";

    // GROUP1: Telegram и Manual кнопки
    var group1 = dialog.add("group", undefined, {name: "group1"}); 
        group1.orientation = "row"; 
        group1.alignChildren = ["left","center"]; 
        group1.spacing = 10; 
        group1.margins = 0; 

        var telegram_button = group1.add("button", undefined, undefined, {name: "telegram_button"}); 
        telegram_button.text = "Telegram"; 
        telegram_button.helpTip = "Open Telegram channel.";
        telegram_button.onClick = function() {
            openURL("https://t.me/romlogunov_hub");
        };

    var manual_button = group1.add("button", undefined, undefined, {name: "manual_button"}); 
        manual_button.text = "Manual"; 
        manual_button.helpTip = "Open user manual.";
        manual_button.onClick = function() {
            openURL("https://romlogunov.notion.site/Manual-YO-FPS-Editor-16adc723a706806ea6e7d077e78261ee?pvs=4");
        };

    // Разделитель
    var divider1 = dialog.add("panel", undefined, undefined, {name: "divider1"}); 
        divider1.alignment = "fill"; 

    // Кнопка "Check For Updates" с изображением
    var check_updates_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0D%00%00%00%0D%08%06%00%00%00r%C3%AB%C3%A4%7C%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%01sRGB%00%C2%AE%C3%8E%1C%C3%A9%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%01%5BIDATx%01%7D%C2%92%C3%91Q%C3%82%40%10%C2%86%C3%BF%C2%BD%04%C2%9E)%01%2B0%25%24%C3%92%00V%00%C2%AF%3E%60%C2%A4%02%C2%A0%02%40t%7C%C3%95%0E%C3%92%00%13%C2%A9%C3%80X%C2%81%C2%B1%C2%83%3C%C2%9B%C3%9C%C2%AD%C2%BB%C3%889a%06%C3%98%C2%99%C3%8C%C3%A4%C3%AE%C3%BE%C3%AFn%C3%AF%C3%BF%C2%8F%C3%90%C2%AA%C2%97%C2%9C%C3%BB%16.eF%C3%8C%40%C2%8F%C3%80%25%11%15%01%C3%8C%C3%BA.%C2%A1R5%C2%9B%C3%9C%C3%8E%C3%88%03%3A%60%C3%A6%C2%B9%C3%BCV%C3%84x%C2%97%C2%85%C2%8A%09%7D%C2%81c%5D%17X%C3%97%C2%A0%1Aj%03%C3%B2%C2%AD%C2%9D%09%C3%A7%C3%93%C2%84*%C2%BF%C3%99RN7%5C%C2%8B%C3%90%C2%8C%C3%BC%1CiK5%C3%9B%2F%01%16%C3%A9%C2%A03%C3%B7m6%C2%B0%C3%91%24%093%1D%3F%C3%A5%3Crl_%3Dd%2C%C3%ACL%C3%98%C3%92%03Z%0D%C2%9A%C2%BE%C3%9Cky%0A%C3%90%0A%1Dc%08%C3%A2%0Cg*%00v%01%05WG%C2%90%7C%3Dv%C3%BC%7D%0A%C2%90%C3%BB%C3%B4%C2%BCkZ%C3%8F%C3%B9Oda%22%C2%A3n)%C3%98%167%08%0B%C2%86%C3%9B%05%C3%AC%3E%1E%C2%B7%C3%8D%C3%B8%7F%C3%9E%C3%91%10%C3%92%C2%B6%11%C3%BB%0A%C2%B1s%C3%94%C2%86%C3%94%C2%BD%C3%B4%C2%A6%3B%C2%B6do%C3%85%C3%AB%C2%99%C2%9E%C2%B8w%C2%8D%C3%84ABF%C2%9B%C2%BC%C2%8E%C2%99)%07%C2%BB%C3%A9%C3%BD%C2%A0%C2%BB%C3%82%C2%99%C2%92X%24t%5E%11qb%26IG%C2%82to%20%C2%B3%C3%94%C2%BC.%01%C2%9A%C3%A3%C2%9F%C3%BEP%C3%ABm-%C2%BBP%C2%AA%C3%B6K%C3%8F%C2%99%03%7F%1A%C3%90%C2%B5%08%23%7D%15%0AH%2C%0F%C3%BB6%C2%8Fw%C2%ACc8J%C3%A5%C3%B9%C3%84%07s*%C2%BD%C2%B3D%C2%B2%C3%90%13%C2%BC%C3%AE%17%C3%A5-%C3%80%0B%C2%A9%C3%A0Y%C2%B6%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    var check_updates = dialog.add("iconbutton", undefined, File.decode(check_updates_imgString), {name: "check_updates", style: "toolbutton"}); 
    check_updates.text = "Check For Updates  "; 
    check_updates.preferredSize.width = 203; 
    check_updates.preferredSize.height = 39; 
    check_updates.helpTip = "Check for the latest updates.";

    var Status_update = dialog.add("statictext", undefined, undefined, {name: "Status_update"}); 
    Status_update.text = "You Used Last version"; 
    Status_update.helpTip = "Current update status.";

    // Функция для открытия ссылок
 function openURL(url) {
    try {
        if ($.os.indexOf("Mac") !== -1) {
            system.callSystem('open "' + url + '"'); // macOS
        } else if ($.os.indexOf("Windows") !== -1) {
            system.callSystem('cmd.exe /c start "" "' + url + '"'); // Windows
        } else {
            alert("Unsupported operating system.");
        }
    } catch (e) {
        alert("Error opening URL: " + e.message);
    }
}

// Обработчик закрытия окна через крестик
dialog.onClose = function() {
    dialog.close();
};

// Показать диалоговое окно About
dialog.show();
}

// Обновим UI при запуске, чтобы всё включилось/выключилось корректно
updateUI();

// -------------------------------------------------------------------------
// Возврат панели/окна
// -------------------------------------------------------------------------
return pal;
}

// ---------------------------------------------------------
//  Запуск в режиме панели или окна
// ---------------------------------------------------------
var myScriptPanel = buildUI(this);

if (myScriptPanel instanceof Window) {
// Если это окно (запущено из обычных Scripts...)
myScriptPanel.center();
myScriptPanel.show();
} else {
// Если это панель (док-скрипт)
myScriptPanel.layout.layout(true);
myScriptPanel.layout.resize();
}