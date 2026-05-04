#!/bin/bash
# Script d'optimisation des images pour le portfolio
# Usage: bash optimize-images.sh

echo "🖼️ Optimisation des images du portfolio..."

# Créer le dossier optimisé s'il n'existe pas
mkdir -p assets/images/optimized

# Fonction pour convertir en WebP avec FFmpeg
optimize_image() {
    local input=$1
    local output=$2
    
    echo "📦 Optimisation: $input"
    
    # Convertir en WebP
    if command -v ffmpeg &> /dev/null; then
        ffmpeg -i "$input" -vf scale='min(1200\,iw)':'min(800\,ih)' -quality 80 "$output" 2>/dev/null
    else
        echo "⚠️  FFmpeg non installé. Utilisez TinyPNG ou Squoosh online"
        return 1
    fi
}

# Optimiser les images principales
echo "🔄 Traitement des images..."

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick trouvé"
    
    # Optimiser les PNG
    for img in assets/images/*.png; do
        [ -e "$img" ] && convert "$img" -strip -quality 85 -resize 1200x800 "$img"
    done
    
    # Optimiser les JPG
    for img in assets/images/*.jpg; do
        [ -e "$img" ] && convert "$img" -strip -quality 85 -resize 1200x800 "$img"
    done
    
    echo "✅ Images optimisées avec ImageMagick"
else
    echo "⚠️  ImageMagick non installé"
    echo "Install: brew install imagemagick (Mac) ou apt-get install imagemagick (Linux)"
fi

# Stats finales
echo ""
echo "📊 Statistiques des images:"
du -sh assets/images/

echo ""
echo "✅ Optimisation terminée!"
echo ""
echo "💡 Conseils:"
echo "- Utilisez WebP avec fallback PNG/JPG"
echo "- TinyPNG : https://tinypng.com"
echo "- Squoosh : https://squoosh.app"
echo "- ImageOptim : https://imageoptim.com"
