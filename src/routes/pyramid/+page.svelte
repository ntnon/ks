<script lang="ts">
	const pyramid = (stars: number) => {
		const element = '*';

		let pyramid: string[] = [];

		for (let i = 0; i < stars; i++) {
			pyramid.push(element.repeat(i + 1));
		}

		for (let i = stars; i > 0; i--) {
			pyramid.push(element.repeat(i));
		}

		console.log(pyramid);

		console.log('f');
	};

	const recPyr: any = (starCount: number, acc: string[] = []) => {
		if (starCount === 0) {
			return acc;
		}
		let tempString = '*'.repeat(starCount);

		return recPyr(starCount - 1, [...acc, '*'.repeat(starCount)]);
	};

	const p1 = [...recPyr(5).reverse(), ...recPyr(5)];

	const p1String = p1.join('\n');
</script>

<button on:click={() => pyramid(5)}>star</button>

<button on:click={() => console.log(recPyr(5))}>rec</button>
⭐
