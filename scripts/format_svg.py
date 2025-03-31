import xml.dom.minidom
import sys
import os

def format_svg(input_path, output_path, indent="  "):
    """
    Bir SVG dosyasını okur, XML içeriğini formatlar ve yeni bir dosyaya kaydeder.

    Args:
        input_path (str): Formatlanacak SVG dosyasının yolu.
        output_path (str): Formatlanmış SVG'nin kaydedileceği dosya yolu.
        indent (str): Girintileme için kullanılacak karakter(ler) (örn: "  " veya "\t").
                       Varsayılan olarak iki boşluktur.
    """
    try:
        # Giriş SVG dosyasını oku
        with open(input_path, 'r', encoding='utf-8') as f_in:
            svg_content = f_in.read()

        # XML içeriğini ayrıştır (parse et)
        # Not: Eğer SVG çok büyükse veya performans kritikse lxml gibi
        #      alternatif kütüphaneler düşünülebilir.
        dom = xml.dom.minidom.parseString(svg_content)

        # XML'i güzel formatta string'e dönüştür (byte olarak döner)
        # encoding='utf-8' önemlidir, SVG'ler genellikle UTF-8 kullanır.
        pretty_xml_bytes = dom.toprettyxml(indent=indent, encoding="utf-8")

        # Byte dizisini string'e çevir
        pretty_xml_str = pretty_xml_bytes.decode('utf-8')

        # --- Temizlik Adımı ---
        # xml.dom.minidom.toprettyxml bazen gereksiz boş satırlar ekleyebilir.
        # Bu satırları temizleyelim.
        lines = pretty_xml_str.splitlines()
        non_empty_lines = [line for line in lines if line.strip()]

        # İlk satır <?xml ...?> deklarasyonu olabilir, minidom bunu ekleyebilir.
        # Genellikle SVG'de zaten vardır veya gereksiz olabilir. İsteğe bağlı olarak kaldırılabilir.
        # Ancak genellikle bırakmak daha güvenlidir. Burada sadece boş satırları temizliyoruz.
        cleaned_xml = "\n".join(non_empty_lines)

        # Temizlenmiş ve formatlanmış XML'i çıkış dosyasına yaz
        with open(output_path, 'w', encoding='utf-8') as f_out:
            f_out.write(cleaned_xml)

        print(f"SVG '{input_path}' başarıyla formatlandı ve '{output_path}' olarak kaydedildi.")
        return True

    except FileNotFoundError:
        print(f"Hata: Giriş dosyası '{input_path}' bulunamadı.")
        return False
    except xml.parsers.expat.ExpatError as e:
        # XML ayrıştırma sırasında hata olursa
        print(f"Hata: XML formatı bozuk veya ayrıştırılamadı ({input_path}) - {e}")
        return False
    except Exception as e:
        # Diğer beklenmedik hatalar için
        print(f"Beklenmedik bir hata oluştu: {e}")
        return False

# --- Betiğin Kullanımı ---
if __name__ == "__main__":
    # Komut satırından argüman almayı sağlar
    # Kullanım: python format_svg.py girdi.svg [cikti_formatli.svg]
    if len(sys.argv) < 2:
        print("Kullanım: python bu_script_adi.py <girdi_dosya.svg> [istege_bagli_cikti_dosya.svg]")
        # Eğer argüman verilmezse kullanıcıdan dosya adı isteyelim
        input_svg_file = input("Lütfen formatlanacak SVG dosyasının yolunu girin: ")
        if not input_svg_file:
            sys.exit("Dosya adı girilmedi.")
    else:
        input_svg_file = sys.argv[1]

    # Çıktı dosyasının adını belirle
    if len(sys.argv) > 2:
        output_svg_file = sys.argv[2]
    else:
        # Eğer çıktı dosyası adı verilmezse, girdi adının sonuna "_formatted" ekle
        base, ext = os.path.splitext(input_svg_file)
        # Orijinal uzantının .svg olduğundan emin olalım (veya neyse onu koruyalım)
        if not ext:
             ext = ".svg" # Uzantısız dosya adı girildiyse varsayılan .svg ekle
        output_svg_file = f"{base}_formatted{ext}"

    # Formatlama fonksiyonunu çağır
    # Girintileme için isterseniz `indent="\t"` (tab karakteri) kullanabilirsiniz.
    format_svg(input_svg_file, output_svg_file, indent="  ")