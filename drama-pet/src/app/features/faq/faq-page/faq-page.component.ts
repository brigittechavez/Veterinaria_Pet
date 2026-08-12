import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FAQ_CATEGORIES, FaqItem } from '../../../data/faq.data';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeadingComponent,
    AccordionComponent,
    RevealDirective
  ],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  categories = FAQ_CATEGORIES;
  selectedCategoryId = signal<string | null>(null);
  openItems = signal<Set<string>>(new Set());

  allItems = computed(() => {
    const items: FaqItem[] = [];
    this.categories.forEach(category => {
      items.push(...category.items);
    });
    return items;
  });

  filteredItems = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (!categoryId) {
      return this.allItems();
    }
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.items : [];
  });

  selectCategory(id: string | null): void {
    this.selectedCategoryId.set(id);
    this.openItems.set(new Set());
  }

  toggleItem(id: string): void {
    this.openItems.update(current => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  isOpen(id: string): boolean {
    return this.openItems().has(id);
  }

  trackById(index: number, item: FaqItem): string {
    return item.id;
  }
}
