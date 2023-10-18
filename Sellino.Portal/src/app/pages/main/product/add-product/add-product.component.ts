import { Component, OnInit } from '@angular/core';
import { ButtonSelectorItem, ButtonSelector } from 'src/app/components/ui-kit/button-selector/button-selector.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productVariations: ButtonSelector[] = [];
  selectedVariations: ButtonSelector[] = [];
  skuCombinations: any[] = [];
  
  ngOnInit(): void {
    this.productVariations = [
      {
        Id: 1,
        Title: "Skostørrelse",
        Options: [{Id: 1, Title: '35', IsSelected: false}, {Id: 1, Title: '36', IsSelected: false}, {Id: 1, Title: '37', IsSelected: false}, {Id: 1, Title: '38', IsSelected: false}, ]
      },
      {
        Id: 2,
        Title: "Farve",
        Options: [{Id: 1, Title: 'Blå', IsSelected: false}, {Id: 1, Title: 'Grøn', IsSelected: false}, {Id: 1, Title: 'Gul', IsSelected: false}, {Id: 1, Title: 'Sort', IsSelected: false}, ]
      },
      {
        Id: 3,
        Title: "Materiale",
        Options: [{Id: 1, Title: 'Læder', IsSelected: false}, {Id: 1, Title: 'Canvas', IsSelected: false}]
      }
    ];    
  }

  onSelect(selectedButtons: ButtonSelector) {
    const optionsSelected = selectedButtons.Options.some(x => x.IsSelected == true);
    let showTable = false;

    if (optionsSelected) {
      if (!this.selectedVariations.some(x => x.Id == selectedButtons.Id)) {
        this.selectedVariations.push(selectedButtons);
      }
    } else {
      this.selectedVariations = this.selectedVariations.filter(x => x.Id !== selectedButtons.Id);
    }

    this.generateSKUs();
  }
  
  generateSKUs() {
    // Reset the skuCombinations array
    this.skuCombinations = [];

    // Generate SKU combinations for all selected variations
    this.generateCombinations(this.productVariations, 0, []);
  }

  generateCombinations(variations: ButtonSelector[], currentIndex: number, currentCombination: any[]) {
    if (currentIndex === variations.length) {
      // We have a complete combination, add it to the SKU combinations array
      this.skuCombinations.push([...currentCombination]);
      return;
    }

    for (const option of variations[currentIndex].Options) {
      if (option.IsSelected) {
        currentCombination.push({ Id: variations[currentIndex].Id, Title: option.Title, Option: option.Title });
        this.generateCombinations(variations, currentIndex + 1, currentCombination);
        currentCombination.pop();
      }
    }
  }

  getSKUValue(sku: any, variationId: number) {
    const variation = sku.find((item: any) => item.Id === variationId);
    console.log(variation);
    
    return variation ? variation.Title : '-';
  }
}

// interface ProductVariations {
//   Id: number,
//   Name: string,
//   Options: ButtonSelectorItem[]
// }
