ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([721840.988502, 6544293.841927, 1162978.979889, 6811224.473657]);
var wms_layers = [];

var format_referentiel_territorial_bfc_completdepartement_0 = new ol.format.GeoJSON();
var features_referentiel_territorial_bfc_completdepartement_0 = format_referentiel_territorial_bfc_completdepartement_0.readFeatures(json_referentiel_territorial_bfc_completdepartement_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_referentiel_territorial_bfc_completdepartement_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_referentiel_territorial_bfc_completdepartement_0.addFeatures(features_referentiel_territorial_bfc_completdepartement_0);
var lyr_referentiel_territorial_bfc_completdepartement_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_referentiel_territorial_bfc_completdepartement_0, 
                style: style_referentiel_territorial_bfc_completdepartement_0,
                popuplayertitle: 'referentiel_territorial_bfc_complet — departement',
                interactive: true,
                title: '<img src="styles/legend/referentiel_territorial_bfc_completdepartement_0.png" /> referentiel_territorial_bfc_complet — departement'
            });
var format_limites_admin_doubs_1 = new ol.format.GeoJSON();
var features_limites_admin_doubs_1 = format_limites_admin_doubs_1.readFeatures(json_limites_admin_doubs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_limites_admin_doubs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_admin_doubs_1.addFeatures(features_limites_admin_doubs_1);
var lyr_limites_admin_doubs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_admin_doubs_1, 
                style: style_limites_admin_doubs_1,
                popuplayertitle: 'limites_admin_doubs',
                interactive: false,
                title: '<img src="styles/legend/limites_admin_doubs_1.png" /> limites_admin_doubs'
            });
var format_Espcesenjeux_2 = new ol.format.GeoJSON();
var features_Espcesenjeux_2 = format_Espcesenjeux_2.readFeatures(json_Espcesenjeux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Espcesenjeux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espcesenjeux_2.addFeatures(features_Espcesenjeux_2);
var lyr_Espcesenjeux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espcesenjeux_2, 
                style: style_Espcesenjeux_2,
                popuplayertitle: 'Espèces à enjeux',
                interactive: true,
    title: 'Espèces à enjeux<br />\
    <img src="styles/legend/Espcesenjeux_2_0.png" /> Anguille d’Europe, Anguille européenne<br />\
    <img src="styles/legend/Espcesenjeux_2_1.png" /> Apron du Rhône<br />\
    <img src="styles/legend/Espcesenjeux_2_2.png" /> Écrevisse à pieds blancs (L\'), Écrevisse à pattes blanches (L\'), Écrevisse pallipède (L\')<br />\
    <img src="styles/legend/Espcesenjeux_2_3.png" /> <br />' });
var format_referentiel_territorial_bfc_completchef_lieu_dep_3 = new ol.format.GeoJSON();
var features_referentiel_territorial_bfc_completchef_lieu_dep_3 = format_referentiel_territorial_bfc_completchef_lieu_dep_3.readFeatures(json_referentiel_territorial_bfc_completchef_lieu_dep_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_referentiel_territorial_bfc_completchef_lieu_dep_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_referentiel_territorial_bfc_completchef_lieu_dep_3.addFeatures(features_referentiel_territorial_bfc_completchef_lieu_dep_3);
var lyr_referentiel_territorial_bfc_completchef_lieu_dep_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_referentiel_territorial_bfc_completchef_lieu_dep_3, 
                style: style_referentiel_territorial_bfc_completchef_lieu_dep_3,
                popuplayertitle: 'referentiel_territorial_bfc_complet — chef_lieu_dep',
                interactive: false,
                title: '<img src="styles/legend/referentiel_territorial_bfc_completchef_lieu_dep_3.png" /> referentiel_territorial_bfc_complet — chef_lieu_dep'
            });
var group_masqu = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'masqué'});

lyr_referentiel_territorial_bfc_completdepartement_0.setVisible(true);lyr_limites_admin_doubs_1.setVisible(true);lyr_Espcesenjeux_2.setVisible(true);lyr_referentiel_territorial_bfc_completchef_lieu_dep_3.setVisible(true);
var layersList = [lyr_referentiel_territorial_bfc_completdepartement_0,lyr_limites_admin_doubs_1,lyr_Espcesenjeux_2,lyr_referentiel_territorial_bfc_completchef_lieu_dep_3];
lyr_referentiel_territorial_bfc_completdepartement_0.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'code_insee': 'code_insee', 'code_siren': 'code_siren', 'nom_du_chef_lieu': 'nom_du_chef_lieu', 'code_insee_de_la_commune_siege': 'code_insee_de_la_commune_siege', 'code_insee_de_la_region': 'code_insee_de_la_region', });
lyr_limites_admin_doubs_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_offici': 'nom_offici', 'code_insee': 'code_insee', 'code_siren': 'code_siren', 'nom_du_che': 'nom_du_che', 'code_ins_1': 'code_ins_1', 'code_ins_2': 'code_ins_2', });
lyr_Espcesenjeux_2.set('fieldAliases', {'cd_sig': 'cd_sig', 'territoire': 'territoire', 'field_1': 'field_1', 'field_2': 'field_2', 'Nom scient': 'Nom scient', 'Nom vernac': 'Nom vernac', 'Indice de ': 'Indice de ', 'Responsabi': 'Responsabi', 'PNA': 'PNA', 'Enjeu rég': 'Enjeu rég', 'Rôle dép': 'Rôle dép', 'Maille_BFC': 'Maille_BFC', 'IMAGE': 'IMAGE', 'image_1': 'image_1', });
lyr_referentiel_territorial_bfc_completchef_lieu_dep_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'nom_du_chef_lieu': 'nom_du_chef_lieu', 'code_insee_de_la_commune_siege': 'code_insee_de_la_commune_siege', 'code_siren': 'code_siren', 'code_departement': 'code_departement', 'nom_president': 'nom_president', 'prenom_president': 'prenom_president', 'civilite': 'civilite', 'date_de_naissance': 'date_de_naissance', 'date_de_debut_de_la_fonction': 'date_de_debut_de_la_fonction', 'code_de_la_categorie_socio_professionnelle': 'code_de_la_categorie_socio_professionnelle', 'libelle_de_la_categorie_socio_professionnelle': 'libelle_de_la_categorie_socio_professionnelle', 'adresse_courriel': 'adresse_courriel', 'telephone': 'telephone', });
lyr_referentiel_territorial_bfc_completdepartement_0.set('fieldImages', {'fid': 'Hidden', 'cleabs': 'Hidden', 'nom_officiel': 'TextEdit', 'code_insee': 'Hidden', 'code_siren': 'Hidden', 'nom_du_chef_lieu': 'Hidden', 'code_insee_de_la_commune_siege': 'Hidden', 'code_insee_de_la_region': 'Hidden', });
lyr_limites_admin_doubs_1.set('fieldImages', {'fid': 'Hidden', 'cleabs': 'Hidden', 'nom_offici': 'Hidden', 'code_insee': 'Hidden', 'code_siren': 'Hidden', 'nom_du_che': 'Hidden', 'code_ins_1': 'Hidden', 'code_ins_2': 'Hidden', });
lyr_Espcesenjeux_2.set('fieldImages', {'cd_sig': 'Hidden', 'territoire': 'Hidden', 'field_1': 'Hidden', 'field_2': 'Hidden', 'Nom scient': 'TextEdit', 'Nom vernac': 'TextEdit', 'Indice de ': 'Hidden', 'Responsabi': 'Hidden', 'PNA': 'TextEdit', 'Enjeu rég': 'TextEdit', 'Rôle dép': 'Hidden', 'Maille_BFC': 'Hidden', 'IMAGE': 'Hidden', 'image_1': 'ExternalResource', });
lyr_referentiel_territorial_bfc_completchef_lieu_dep_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nom_officiel': 'TextEdit', 'nom_du_chef_lieu': 'TextEdit', 'code_insee_de_la_commune_siege': 'TextEdit', 'code_siren': 'TextEdit', 'code_departement': 'TextEdit', 'nom_president': 'TextEdit', 'prenom_president': 'TextEdit', 'civilite': 'TextEdit', 'date_de_naissance': 'TextEdit', 'date_de_debut_de_la_fonction': 'TextEdit', 'code_de_la_categorie_socio_professionnelle': 'TextEdit', 'libelle_de_la_categorie_socio_professionnelle': 'TextEdit', 'adresse_courriel': 'TextEdit', 'telephone': 'TextEdit', });
lyr_referentiel_territorial_bfc_completdepartement_0.set('fieldLabels', {});
lyr_limites_admin_doubs_1.set('fieldLabels', {});
lyr_Espcesenjeux_2.set('fieldLabels', {'Nom scient': 'inline label - always visible', 'Nom vernac': 'inline label - always visible', 'PNA': 'inline label - always visible', 'Enjeu rég': 'inline label - always visible', 'image_1': 'no label', });
lyr_referentiel_territorial_bfc_completchef_lieu_dep_3.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nom_officiel': 'no label', 'nom_du_chef_lieu': 'no label', 'code_insee_de_la_commune_siege': 'no label', 'code_siren': 'no label', 'code_departement': 'no label', 'nom_president': 'no label', 'prenom_president': 'no label', 'civilite': 'no label', 'date_de_naissance': 'no label', 'date_de_debut_de_la_fonction': 'no label', 'code_de_la_categorie_socio_professionnelle': 'no label', 'libelle_de_la_categorie_socio_professionnelle': 'no label', 'adresse_courriel': 'no label', 'telephone': 'no label', });
lyr_referentiel_territorial_bfc_completchef_lieu_dep_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});