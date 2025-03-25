use criterion::{black_box, criterion_group, criterion_main, Criterion};
use direct_ring_buffer::create_ring_buffer;


fn bench_elements<T: Copy + Default>(c: &mut Criterion) {
    let type_name = std::any::type_name::<T>();
    const BUFFER_SIZE: usize = 100_000_000;
    let (mut producer, mut consumer) = create_ring_buffer::<T>(BUFFER_SIZE);

    // Fill the buffer with data
    c.bench_function(&format!("write_element({type_name}) ({BUFFER_SIZE} elements)"), |b| {
        b.iter(|| {
            for _ in 0..BUFFER_SIZE {
                black_box(producer.write_element(T::default()));
            }
        });
    });

    c.bench_function(&format!("read_element({type_name}) ({BUFFER_SIZE} elements)"), |b| {
        b.iter(|| {
            // Read elements from the buffer
            for _ in 0..BUFFER_SIZE {
                black_box(consumer.read_element());
            }
        });
    });
}

criterion_group!(bench_group_elements, bench_elements::<u8>, bench_elements::<u16>, bench_elements::<u32>, bench_elements::<usize>);
criterion_main!(bench_group_elements);
