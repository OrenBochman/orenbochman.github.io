---
title: Ebbok Hacks
layout: post
date: 2021-05-29 18:16:16 +0300
categories:
    - idea
tags:
    - AI
    - NLP
    - Intelligence
    - resolution
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: just a handy command line conversion recipe
---

# convert djvu to pdf
A number of djvu docs collected over a long time need to be convert them into pdf.

```zsh
djvu2pdf source.djvu in.pdf
```
ending with a oversized pdf

this can than get converted to a smaller file with

```zsh
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.6 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=out.pdf in.pdf
```

this came in handy when I found out gs was aliased 

``` zsh
unalias gs
```

# add a cover to a pdf

my prefered way to convert image to pdf is using convert from image magic

```
convert -density 200x200 -quality 60 -compress jpeg input.pdf output.pdf
```
but since it does not work anylonger on my system I use mac specific `sip` 
```bash
# params pdf_file_name image_file_name resizing factor
echo adding $2 to $1
echo removing quarantine from $1
xattr -r -d com.apple.quarantine "$1"
#size=`pdfinfo "$1" | grep "Page size:" | awk '{print $5*4 " " $3*4}'`
h=`pdfinfo "$1" | grep "Page size:" | awk '{print $5}'` 
h= h * $3
w=`pdfinfo "$1" | grep "Page size:" | awk '{print $3}'` 
w= w * $3

echo $h $w
# rm cover.pdf
`sips -s format pdf -z "$h" "$w" cover.jpg --out cover.pdf`
#convert $2 -quality 60 -resize $size cover.pdf
#convert $2 -resize $size cover.pdf
#open cover.pdf
#convert $2 -resize $size cover.pdf 
`pdftk cover.pdf "$1" cat output new.pdf`
#mv "$1" old_file.pdf
#mv new.pdf "$1"
rm cover.pdf
```


# Compress a pdf

```
ghostscript -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

a more aggressive version

```
ghostscript -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dCompatibilityLevel=1.7 -dNOPAUSE -dQUIET -dBATCH -dSAFER -dSimulateOverprint=true -dSubsetFonts=true -dColorImageDownsampleType=/Bicubic -dColorImageResolution=150 -dGrayImageDownsampleType=/Bicubic -dGrayImageResolution=150 -dMonoImageDownsampleType=/Bicubic -dMonoImageResolution=150 -sOutputFile=output.pdf input.pdf
```
adding conversion of images to grayscale:
```
ghostscript -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dCompatibilityLevel=1.7 -dNOPAUSE -dQUIET -dBATCH -dSAFER -dOverprint=simulate -dSubsetFonts=true -dColorImageDownsampleType=/Bicubic -dColorConversionStrategy=/Gray -dProcessColorModel=/DeviceGray  -dColorImageResolution=150 -dGrayImageDownsampleType=/Bicubic -dGrayImageResolution=150 -dMonoImageDownsampleType=/Bicubic -dMonoImageResolution=150 -sOutputFile=output.pdf input.pdf

```
here is one way this can be used on multiple files
```
find . -name '*.pdf' | while read pdf; do gs -sDEVICE=pdfwrite  -dPDFSETTINGS=/ebook -dCompatibilityLevel=1.7 -dNOPAUSE -dQUIET -dBATCH -sOutputFile="${pdf}_new.pdf" "$pdf"; done
```

## Other options for PDFSETTINGS:

- /screen selects low-resolution output similar to the Acrobat Distiller "Screen Optimized" setting.
- /ebook selects medium-resolution output similar to the Acrobat Distiller "eBook" setting.
- /printer selects output similar to the Acrobat Distiller "Print Optimized" setting.
- /prepress selects output similar to Acrobat Distiller "Prepress Optimized" setting.
- /default selects output intended to be useful across a wide variety of uses, possibly at the expense of a larger output file.

## References
- [High Level Output Devices](https://www.ghostscript.com/doc/9.54.0/VectorDevices.htm)
- [Ps2pdf](http://ghostscript.com/doc/current/Ps2pdf.htm)
- https://ss64.com/osx/sips.html
- https://zaiste.net/posts/command-line-resizing-images/
- https://github.com/readyready15728/misc/blob/master/epub-recompression.md
- https://superuser.com/questions/350201/convert-many-images-to-one-pdf-on-mac
- https://linuxatty.wordpress.com/2018/12/12/fix-for-imagemagick-convert-errors-with-pdf-files/
- https://www.linuxadictos.com/en/convertir-jpg-a-pdf.html
- https://stackoverflow.com/questions/20531079/adding-an-image-to-a-pdf-with-pdftk
- https://apple.stackexchange.com/questions/12709/how-can-i-convert-jpg-into-pdf-easily
- https://unix.stackexchange.com/questions/39464/how-to-query-pdf-page-size-from-the-command-line