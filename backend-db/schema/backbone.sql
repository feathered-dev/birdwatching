CREATE TABLE IF NOT EXISTS Description (
    taxonID INTEGER,
    [type] TEXT,
    [language] TEXT,
    [description] TEXT,
    source TEXT,
    creator TEXT,
    contributor TEXT,
    license TEXT
);
CREATE TABLE IF NOT EXISTS Distribution(
    taxonID INTEGER,
    locationID TEXT,
    locality TEXT,
    country TEXT,
    countryCode TEXT,
    locationRemarks TEXT,
    establishmentMeans TEXT,
    lifeStage TEXT,
    occurrenceStatus TEXT,
    threatStatus TEXT,
    source TEXT
 );
CREATE TABLE IF NOT EXISTS "Multimedia"(
    "taxonID" TEXT,
    "identifier" TEXT,
    "references" TEXT,
    "title" TEXT,
    "description" TEXT,
    "license" TEXT,
    "creator" TEXT,
    "created" TEXT,
    "contributor" TEXT,
    "publisher" TEXT,
    "rightsHolder" TEXT,
    "source" TEXT
);
CREATE TABLE IF NOT EXISTS Reference(
    taxonID INTEGER,
    bibliographicCitation TEXT,
    identifier TEXT,
    refs TEXT,
    source TEXT
 );
CREATE TABLE IF NOT EXISTS Taxon(
    taxonID INTEGER,
    datasetID TEXT,
    parentNAmeUsageID INTEGER,
    acceptedNameUsageID INTEGER,
    originalNameUsageID INTEGER,
    scientificName TEXT,
    scientificNameAuthorship TEXT,
    canonicalName TEXT,
    genericName TEXT,
    specificEpithet TEXT,
    infraspecificEpithet TEXT,
    taxonRank TEXT,
    nameAccordingTo TEXT,
    namePublishedIn TEXT,
    taxonomicStatus TEXT,
    nomenclaturalStatus TEXT,
    taxonRemarks TEXT,
    kingdom TEXT,
    phylum TEXT,
    class TEXT,
    [order] TEXT,
    family TEXT,
    genus TEXT
);
CREATE TABLE IF NOT EXISTS TypesAndSpecimen(
    taxonID INTEGER,
    typeDesignationType TEXT,
    typeDesignatedBy TEXT,
    scientificName TEXT,
    taxonRank TEXT,
    source TEXT
);
CREATE TABLE IF NOT EXISTS VernacularName(
    taxonID INTEGER,
    vernacularName TEXT,
    language TEXT,
    country TEXT,
    countryCode TEXT,
    sex TEXT,
    lifeStage TEXT,
    source TEXT
);