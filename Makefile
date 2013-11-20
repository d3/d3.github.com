EXAMPLES = \
	box \
	bubble \
	bullet \
	calendar \
	cartogram \
	chord \
	cluster \
	force \
	pack \
	population \
	stack \
	stream \
	sunburst \
	tree \
	treemap \
	voronoi \
	bundle \
	airports-all \
	airports \
	iris-parallel \
	iris-splom \
	pack-hierarchy \
	bar-hierarchy \
	gears \
	force-collision \
	force-collapsible \
	force-states \
	azimuthal \
	choropleth \
	tree-zoom \
	treemap-zoom \
	partition-zoom \
	area-gradient \
	flight-calendar \
	cluster-radial \
	sankey \
	fisheye \
	hive \
	miserables \
	nations \
	uber \
	bezier \
	coffee \
	collatz \
	parsets \
	cloud \
	facebook-ipo \
	budget \
	koalas \
	particles \
	indented-tree \
	ronded-rect \
	sperm \
	show-reel \
	debt \
	force-labels \
	illusion \
	voronoi-picker \
	map-zoom \
	rain \
	color \
	nutrient \
	hn \
	world \
	slope \
	ncaa \
	cubism \
	crossfilter \
	windhistory \
	lcf \
	force-voronoi \
	house-heatmap \
	house-map \
	open-budget

GENERATED_FILES = \
	ex.jpg

all: $(GENERATED_FILES)

.PHONY: all clean

clean:
	rm -f -- $(GENERATED_FILES)

ex.jpg:
	gm montage -quality 85 -tile 10x -geometry 226x180+0+0 $(addprefix ex/,$(addsuffix .png,$(EXAMPLES))) $@
