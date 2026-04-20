import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-requests',
  imports: [],
  templateUrl: './worker-requests.html',
  styleUrl: './worker-requests.css',
})
export class WorkerRequests {
  stats = [
    {
      title: 'إجمالي الطلبات المنفذة',
      value: '45',
      icon: 'check_circle',
      iconColor: 'text-[#10B981]',
      bgColor: 'bg-[#ECFDF5]'
    },
    {
      title: 'إجمالي المدفوعات للمنصة',
      value: '275 ج',
      icon: 'money',
      iconColor: 'text-[#3B82F6]',
      bgColor: 'bg-[#EFF6FF]'
    },
    {
      title: 'العمولة المستحقة',
      value: '45 ج',
      icon: 'money',
      iconColor: 'text-[#EF4444]',
      bgColor: 'bg-[#FEF2F2]'
    },
    {
      title: 'عمولة المنصة / الطلب',
      value: '15 ج',
      icon: 'receipt_long',
      iconColor: 'text-[var(--warning)]',
      bgColor: 'bg-[#FFFBEB]'
    },
  ];


  progressSteps = [
    { id: 1, text: 'الطلب الأول', completed: true },
    { id: 2, text: 'الطلب الثاني', completed: true },
    { id: 3, text: 'الطلب الثالث', completed: false, active: true },
    { id: 4, text: 'الطلب الرابع', completed: false },
    { id: 5, text: 'الطلب الخامس', completed: false },
  ];


  paymentHistory = [
    {
      id: 'PAY-8821',
      date: '19/04/2026',
      amount: '75 ج',
      status: 'مقبول',
      statusClass: 'bg-[#EAFBF2] text-[var(--secondary)]'
    },
    {
      id: 'PAY-8750',
      date: '15/04/2026',
      amount: '75 ج',
      status: 'مقبول',
      statusClass: 'bg-[#EAFBF2] text-[var(--secondary)]'
    },
    {
      id: 'PAY-8642',
      date: '10/04/2026',
      amount: '75 ج',
      status: 'مقبول',
      statusClass: 'bg-[#EAFBF2] text-[var(--secondary)]'
    },
    {
      id: 'PAY-8531',
      date: '05/04/2026',
      amount: '75 ج',
      status: 'مقبول',
      statusClass: 'bg-[#EAFBF2] text-[var(--secondary)]'
    },
    {
      id: 'PAY-8420',
      date: '01/04/2026',
      amount: '75 ج',
      status: 'قيد المراجعة',
      statusClass: 'bg-[#FFFBEB] text-[var(--warning)]'
    },
  ];




}