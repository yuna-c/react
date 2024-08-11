import './styles/App.scss';

function App() {
	return (
		<div id='wrap'>
			<header className='header'>
				<h1>2024 파리 올림픽</h1>
			</header>

			<main className='main'>
				<form className='form-group'>
					<div className='input-field'>
						<label>국가명</label>
						<input type='text' value placeholder='국가 입력' name='country' />
					</div>
					<div className='input-field'>
						<label>금메달</label>
						<input type='number' value='0' name='gold' />
					</div>
					<div className='input-field'>
						<label>은메달</label>
						<input type='number' value='0' name='silver' />
					</div>
					<div className='input-field'>
						<label>동메달</label>
						<input type='number' value='0' name='bronze' />
					</div>
					<div className='button-group'>
						<button type='submit'>국가 추가</button>
						<button type='button'>업데이트</button>
					</div>
				</form>

				<div className='table-group'>
					<table>
						<thead>
							<tr>
								<th>국가명</th>
								<th>금메달</th>
								<th>은메달</th>
								<th>동메달</th>
								<th>액션</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>1</td>
								<td>
									<button>삭제</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='no-data'>
					<span>아직 추가된 국가가 없습니다. 메달을 추적하세요!</span>
				</div>
			</main>
		</div>
	);
}

export default App;
