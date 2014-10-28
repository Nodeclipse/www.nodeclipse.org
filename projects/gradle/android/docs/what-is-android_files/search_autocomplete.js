var gSelectedIndex = -1;
var gSelectedID = -1;
var gMatches = new Array();
var gLastText = "";
var ROW_COUNT = 20;
var gInitialized = false;

function set_row_selected(row, selected)
{
    var c1 = row.cells[0];
    var c2 = row.cells[1];
    if (selected) {
        c1.className = "jd-autocomplete jd-selected";
        c2.className = "jd-autocomplete jd-selected jd-linktype";
    } else {
        c1.className = "jd-autocomplete ";
        c2.className = "jd-autocomplete jd-linktype";
    }
}

function set_row_values(toroot, row, match)
{
    var link = row.cells[0].childNodes[0];
    link.innerHTML = match.label;
    link.href = toroot + match.link
    row.cells[1].innerHTML = match.type;
}

function sync_selection_table(toroot)
{
    var filtered = document.getElementById("search_filtered");
    var r;
    var i;

    gSelectedID = -1;

    if (!gInitialized) {
        for (i=0; i<ROW_COUNT; i++) {
            var r = filtered.insertRow(-1);
            var c1 = r.insertCell(-1);
            var c2 = r.insertCell(-1);
            c1.className = "jd-autocomplete";
            c2.className = "jd-autocomplete jd-linktype";
            var link = document.createElement("a");
            c1.appendChild(link);
        }
        var r = filtered.insertRow(-1);
        var c1 = r.insertCell(-1);
        c1.className = "jd-autocomplete jd-linktype";
        c1.colSpan = 2;
        gInitialized = true;
    }

    if (gMatches.length > 0) {
        filtered.className = "jd-autocomplete-table-showing";
        var N = gMatches.length < ROW_COUNT ? gMatches.length : ROW_COUNT;
        for (i=0; i<N; i++) {
            r = filtered.rows[i];
            r.style.display = "table-row";
            set_row_values(toroot, r, gMatches[i]);
            set_row_selected(r, i == gSelectedIndex);
            if (i == gSelectedIndex) {
                gSelectedID = gMatches[i].id;
            }
        }
        for (; i<ROW_COUNT; i++) {
            r = filtered.rows[i];
            r.style.display = "none";
        }
        if (gMatches.length > ROW_COUNT) {
            r = filtered.rows[ROW_COUNT];
            r.style.display = "table-row";
            c1 = r.cells[0];
            c1.innerHTML = "plus " + (gMatches.length-ROW_COUNT) + " more";
        } else {
            filtered.rows[ROW_COUNT].style.display = "none";
        }
    } else {
        filtered.className = "jd-autocomplete-table-hidden";
    }
}

function search_changed(e, kd, toroot)
{
    var search = document.getElementById("search_autocomplete");
    var text = search.value;

    // 13 = enter
    if (kd && (e.keyCode == 13)) {
        if (gSelectedIndex >= 0) {
            window.location = toroot + gMatches[gSelectedIndex].link;
        }
    }
    // 38 -- arrow up
    else if (kd && (e.keyCode == 38)) {
        if (gSelectedIndex > 0) {
            gSelectedIndex--;
        }
        sync_selection_table(toroot);
        return false;
    }
    // 40 -- arrow down
    else if (kd && (e.keyCode == 40)) {
        if (gSelectedIndex < gMatches.length-1
                        && gSelectedIndex < ROW_COUNT-1) {
            gSelectedIndex++;
        }
        sync_selection_table(toroot);
        return false;
    }
    else if (!kd) {
        gMatches = new Array();
        matchedCount = 0;
        gSelectedIndex = -1;
        for (i=0; i<DATA.length; i++) {
            var s = DATA[i];
            if (text.length != 0 && s.label.indexOf(text) != -1) {
                gMatches[matchedCount] = s;
                if (gSelectedID == s.id) {
                    gSelectedIndex = matchedCount;
                }
                matchedCount++;
            }
        }
        if (matchedCount > 0) {
            if (gSelectedIndex < 0) {
                gSelectedIndex = 0;
            }
        } else {
            gSelectedIndex = -1;
        }
    
        sync_selection_table(toroot);
    }
}

var QUICK_SEARCH_TEXT = "(quick search)";

function search_focus_changed(obj, focused)
{
    if (focused) {
        if(obj.value == QUICK_SEARCH_TEXT){
            obj.value = "";
            obj.style.color="#000000";
        }
        obj.select();
    } else {
        if (obj.value == "") {
            obj.value = QUICK_SEARCH_TEXT;
            obj.style.color="#aaaaaa";
        }
    }
}
