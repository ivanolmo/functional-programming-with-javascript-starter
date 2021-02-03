const fizzbuzz = (start, end) => {
    for (i = start; i <= end; i++) {
        if (i % 2 === 0 && i % 5 === 0) {
            console.log('FooBar')
        } else if (i % 5 === 0) {
            console.log('Bar')
        } else if (i % 2 === 0) {
            console.log('Foo')
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(17, 53);