function zoomExtent()
	{
	map.getView().setZoom(13);
	map.getView().setCenter(ol.proj.transform([10.15,45.9], 'EPSG:4326', 'EPSG:3857'));
	}
$(document).ready(function()
	{
	$('#ButOutilsOn').click(function()
		{
		$("#barreOutil").show('slide', {direction: 'up'}, 500);
		$("#ButOutilsOn").hide();
		$("#ButOutilsOff").show();
		});
	});
$(document).ready(function()
	{
	$('#ButOutilsOff').click(function()
		{
		$("#barreOutil").hide('slide', {direction: 'up'}, 500);
		$("#ButOutilsOff").hide();
		$("#ButOutilsOn").show();
		});
	});
$(function()
	{
	$('#barreOutil').draggable();
	});
	
$(function()
	{
	$('#toolboxBaseMap').draggable();
	});
$(document).ready(function()
	{
	$('#BtFond').click(function()
		{
		$("#toolboxCalques").hide();
		if( $("#toolboxBaseMap").is(":hidden") ) 
			{$("#toolboxBaseMap").show('slide', {direction: 'right'}, 500);}
		else
			{$("#toolboxBaseMap").hide('slide', {direction: 'right'}, 500);}
		});
	});
function switchLayer(i)
	{
	map.removeLayer(layers[i]);
	map.getLayers().insertAt(1, layers[i]);
	for (j = 0, jj = layers.length; j < jj; ++j) 
		{
		if (j!=i)
			{
			map.removeLayer(layers[j]);
			}
		}
	}
$(document).ready(function()
	{
	$('#BtMesure').click(function()
		{
		$("#outil_recherche").hide();
		if( $("#outil_mesure").is(":hidden") ) 
			{$("#outil_mesure").show('slide', {direction: 'left'}, 500);}
		else
			{$("#outil_mesure").hide('slide', {direction: 'left'}, 500);}
		});
	});
$(document).ready(function()
	{
	$('#BtSearch').click(function()
		{
		$("#outil_mesure").hide();
		if( $("#outil_recherche").is(":hidden") ) 
			{$("#outil_recherche").show('slide', {direction: 'left'}, 500);}
		else
			{$("#outil_recherche").hide('slide', {direction: 'left'}, 500);}
		});
	});

function showValue(i,newValue)
	{
	var valeur = newValue/100;
	
	layersPerso[i].setOpacity(valeur);
	}
function afficheLayer(i,ID)
	{
	if (document.getElementById(ID).checked == false)
		{
		layersPerso[i].setVisible(false);
		}
	else
		{
		layersPerso[i].setVisible(true);
		}
	}	
$(function()
	{
	$('#toolboxCalques').draggable();
	});
$(document).ready(function()
	{
	$('#BtLayers').click(function()
		{
		$("#toolboxBaseMap").hide();
		if( $("#toolboxCalques").is(":hidden") ) 
			{$("#toolboxCalques").show('slide', {direction: 'right'}, 500);}
		else
			{$("#toolboxCalques").hide('slide', {direction: 'right'}, 500);}
		});
	});