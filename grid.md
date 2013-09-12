

<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Handsontable example - jsFiddle demo</title>
  
  <script type='text/javascript' src='/js/lib/dummy.js'></script>
  
  
  
  <link rel="stylesheet" type="text/css" href="/css/result-light.css">
  
  <style type='text/css'>
    </style><!-- Ugly Hack due to jsFiddle issue: http://goo.gl/BUfGZ -->

<script src="http://handsontable.com/lib/jquery.min.js"></script>
<script src="http://handsontable.com/dist/jquery.handsontable.full.js"></script>
<link rel="stylesheet" media="screen" href="http://handsontable.com/dist/jquery.handsontable.full.css">
<link rel="stylesheet" media="screen" href="http://handsontable.com/demo/css/samples.css">

<style type="text/css">
body {background: white; margin: 20px;}
h2 {margin: 20px 0;}
.handsontable .currentRow {
  background-color: #E7E8EF;
}

.handsontable .currentCol {
  background-color: #F9F9FB;
}


  </style>
  


<script type='text/javascript'>//<![CDATA[ 

$(document).ready(function () {

  function getCarData() {
    return [
      ["Nissan", 2009, "black", "black"],
      ["Nissan", 2006, "blue", "blue"],
      ["Chrysler", 2004, "yellow", "black"],
      ["Volvo", 2012, "white", "gray"]
    ];
  }
  
  var data = [
    ["", "Kia", "Nissan", "Toyota", "Honda"],
    ["2008", 10, 11, 12, 13],
    ["2009", 20, 11, 14, 13],
    ["2010", 30, 15, 12, 13]
  ];
  
  $("#example1").handsontable({
    data: data,
    minRows: 5,
    minCols: 6,
    minSpareRows: 1,
    currentRowClassName: 'currentRow',
    currentColClassName: 'currentCol',
    autoWrapRow: true,
    colHeaders: true,
      rowHeaders: true
  });
  
  $("#example1").handsontable('selectCell', 3, 3);
  
  function bindDumpButton() {
      $('body').on('click', 'button[name=dump]', function () {
        var dump = $(this).data('dump');
        var $container = $(dump);
        console.log('data of ' + dump, $container.handsontable('getData'));
      });
    }
  bindDumpButton();

});
//]]>  

</script>


</head>
<body>
  <h2>Highlight current row or column</h2>

<p>Use options <code>currentRowClassName</code> and <code>currentColumnClassName</code>.</p>

<div class="handsontable" id="example1"></div>

<p>
  <button name="dump" data-dump="#example1" title="Prints current data source to Firebug/Chrome Dev Tools">
    Dump
    data to console
  </button>
</p>

  
</body>